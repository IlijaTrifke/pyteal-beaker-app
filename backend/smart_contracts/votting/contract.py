import beaker
import pyteal as pt


class VotingState:
    Trump = beaker.GlobalStateValue(stack_type=pt.TealType.uint64, descr="Trump votes")

    Biden = beaker.GlobalStateValue(stack_type=pt.TealType.uint64, descr="Biden votes")

    Winner = beaker.GlobalStateValue(stack_type=pt.TealType.bytes, descr="Winner")

    pbtTrump = beaker.GlobalStateValue(
        stack_type=pt.TealType.uint64, descr="Trump percentage"
    )

    pbtBiden = beaker.GlobalStateValue(
        stack_type=pt.TealType.uint64, descr="Biden percentage"
    )


app = beaker.Application("votingApp", state=VotingState)


@app.external
def voteForTrump(*, output: pt.abi.Uint64) -> pt.Expr:
    return pt.Seq(
        app.state.Trump.set(app.state.Trump.get() + pt.Int(1)),
        output.set(app.state.Trump.get()),
    )


@app.external
def voteForBiden(*, output: pt.abi.Uint64) -> pt.Expr:
    return pt.Seq(
        app.state.Biden.set(app.state.Biden.get() + pt.Int(1)),
        output.set(app.state.Biden.get()),
    )


@app.external
def winnerIs(*, output: pt.abi.String) -> pt.Expr:
    return pt.Seq(
        pt.If(app.state.Trump.get() > app.state.Biden.get())
        .Then(app.state.Winner.set(pt.Bytes("Trump")))
        .ElseIf(app.state.Trump.get() == app.state.Biden.get())
        .Then(app.state.Winner.set(pt.Bytes("nobody")))
        .Else(app.state.Winner.set(pt.Bytes("Biden"))),
        output.set(app.state.Winner.get()),
    )


@app.external
def percentageTramp(*, output: pt.abi.Uint64) -> pt.Expr:
    return pt.Seq(
        app.state.pbtTrump.set(
            (app.state.Trump.get() * pt.Int(100))
            / (app.state.Trump.get() + app.state.Biden.get())
        ),
        output.set(app.state.pbtTrump.get()),
    )


@app.external
def percentageBiden(*, output: pt.abi.Uint64) -> pt.Expr:
    return pt.Seq(
        app.state.pbtBiden.set(
            (app.state.Biden.get() * pt.Int(100))
            / (app.state.Trump.get() + app.state.Biden.get())
        ),
        output.set(app.state.pbtBiden.get()),
    )
