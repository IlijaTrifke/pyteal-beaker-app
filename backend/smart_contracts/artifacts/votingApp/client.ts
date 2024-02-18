/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner, modelsv2 } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "voteForTrump()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "voteForBiden()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "winnerIs()string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "percentageTramp()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "percentageBiden()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSAxMDAKYnl0ZWNibG9jayAweDU0NzI3NTZkNzAgMHg0MjY5NjQ2NTZlIDB4MTUxZjdjNzUgMHg1NzY5NmU2ZTY1NzIgMHggMHg3MDYyNzQ1NDcyNzU2ZDcwIDB4NzA2Mjc0NDI2OTY0NjU2ZQp0eG4gTnVtQXBwQXJncwppbnRjXzAgLy8gMAo9PQpibnogbWFpbl9sMTIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhiNzliNGNjOCAvLyAidm90ZUZvclRydW1wKCl1aW50NjQiCj09CmJueiBtYWluX2wxMQp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweGZmMGY5ZDVkIC8vICJ2b3RlRm9yQmlkZW4oKXVpbnQ2NCIKPT0KYm56IG1haW5fbDEwCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4NDNlMTMzYTkgLy8gIndpbm5lcklzKClzdHJpbmciCj09CmJueiBtYWluX2w5CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4NjA0YjJlZDEgLy8gInBlcmNlbnRhZ2VUcmFtcCgpdWludDY0Igo9PQpibnogbWFpbl9sOAp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDg3NjE5ZjgxIC8vICJwZXJjZW50YWdlQmlkZW4oKXVpbnQ2NCIKPT0KYm56IG1haW5fbDcKZXJyCm1haW5fbDc6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgcGVyY2VudGFnZUJpZGVuY2FzdGVyXzkKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDg6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgcGVyY2VudGFnZVRyYW1wY2FzdGVyXzgKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDk6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgd2lubmVySXNjYXN0ZXJfNwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTA6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgdm90ZUZvckJpZGVuY2FzdGVyXzYKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDExOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIHZvdGVGb3JUcnVtcGNhc3Rlcl81CmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMjoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQpibnogbWFpbl9sMTQKZXJyCm1haW5fbDE0Ogp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQphc3NlcnQKaW50Y18xIC8vIDEKcmV0dXJuCgovLyB2b3RlRm9yVHJ1bXAKdm90ZUZvclRydW1wXzA6CnByb3RvIDAgMQppbnRjXzAgLy8gMApieXRlY18wIC8vICJUcnVtcCIKYnl0ZWNfMCAvLyAiVHJ1bXAiCmFwcF9nbG9iYWxfZ2V0CmludGNfMSAvLyAxCisKYXBwX2dsb2JhbF9wdXQKYnl0ZWNfMCAvLyAiVHJ1bXAiCmFwcF9nbG9iYWxfZ2V0CmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIHZvdGVGb3JCaWRlbgp2b3RlRm9yQmlkZW5fMToKcHJvdG8gMCAxCmludGNfMCAvLyAwCmJ5dGVjXzEgLy8gIkJpZGVuIgpieXRlY18xIC8vICJCaWRlbiIKYXBwX2dsb2JhbF9nZXQKaW50Y18xIC8vIDEKKwphcHBfZ2xvYmFsX3B1dApieXRlY18xIC8vICJCaWRlbiIKYXBwX2dsb2JhbF9nZXQKZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gd2lubmVySXMKd2lubmVySXNfMjoKcHJvdG8gMCAxCmJ5dGVjIDQgLy8gIiIKYnl0ZWNfMCAvLyAiVHJ1bXAiCmFwcF9nbG9iYWxfZ2V0CmJ5dGVjXzEgLy8gIkJpZGVuIgphcHBfZ2xvYmFsX2dldAo+CmJueiB3aW5uZXJJc18yX2w0CmJ5dGVjXzAgLy8gIlRydW1wIgphcHBfZ2xvYmFsX2dldApieXRlY18xIC8vICJCaWRlbiIKYXBwX2dsb2JhbF9nZXQKPT0KYm56IHdpbm5lcklzXzJfbDMKYnl0ZWNfMyAvLyAiV2lubmVyIgpieXRlY18xIC8vICJCaWRlbiIKYXBwX2dsb2JhbF9wdXQKYiB3aW5uZXJJc18yX2w1Cndpbm5lcklzXzJfbDM6CmJ5dGVjXzMgLy8gIldpbm5lciIKcHVzaGJ5dGVzIDB4NmU2ZjYyNmY2NDc5IC8vICJub2JvZHkiCmFwcF9nbG9iYWxfcHV0CmIgd2lubmVySXNfMl9sNQp3aW5uZXJJc18yX2w0OgpieXRlY18zIC8vICJXaW5uZXIiCmJ5dGVjXzAgLy8gIlRydW1wIgphcHBfZ2xvYmFsX3B1dAp3aW5uZXJJc18yX2w1OgpieXRlY18zIC8vICJXaW5uZXIiCmFwcF9nbG9iYWxfZ2V0CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApsZW4KaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgMApjb25jYXQKZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gcGVyY2VudGFnZVRyYW1wCnBlcmNlbnRhZ2VUcmFtcF8zOgpwcm90byAwIDEKaW50Y18wIC8vIDAKYnl0ZWMgNSAvLyAicGJ0VHJ1bXAiCmJ5dGVjXzAgLy8gIlRydW1wIgphcHBfZ2xvYmFsX2dldAppbnRjXzIgLy8gMTAwCioKYnl0ZWNfMCAvLyAiVHJ1bXAiCmFwcF9nbG9iYWxfZ2V0CmJ5dGVjXzEgLy8gIkJpZGVuIgphcHBfZ2xvYmFsX2dldAorCi8KYXBwX2dsb2JhbF9wdXQKYnl0ZWMgNSAvLyAicGJ0VHJ1bXAiCmFwcF9nbG9iYWxfZ2V0CmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIHBlcmNlbnRhZ2VCaWRlbgpwZXJjZW50YWdlQmlkZW5fNDoKcHJvdG8gMCAxCmludGNfMCAvLyAwCmJ5dGVjIDYgLy8gInBidEJpZGVuIgpieXRlY18xIC8vICJCaWRlbiIKYXBwX2dsb2JhbF9nZXQKaW50Y18yIC8vIDEwMAoqCmJ5dGVjXzAgLy8gIlRydW1wIgphcHBfZ2xvYmFsX2dldApieXRlY18xIC8vICJCaWRlbiIKYXBwX2dsb2JhbF9nZXQKKwovCmFwcF9nbG9iYWxfcHV0CmJ5dGVjIDYgLy8gInBidEJpZGVuIgphcHBfZ2xvYmFsX2dldApmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyB2b3RlRm9yVHJ1bXBfY2FzdGVyCnZvdGVGb3JUcnVtcGNhc3Rlcl81Ogpwcm90byAwIDAKaW50Y18wIC8vIDAKY2FsbHN1YiB2b3RlRm9yVHJ1bXBfMApmcmFtZV9idXJ5IDAKYnl0ZWNfMiAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCml0b2IKY29uY2F0CmxvZwpyZXRzdWIKCi8vIHZvdGVGb3JCaWRlbl9jYXN0ZXIKdm90ZUZvckJpZGVuY2FzdGVyXzY6CnByb3RvIDAgMAppbnRjXzAgLy8gMApjYWxsc3ViIHZvdGVGb3JCaWRlbl8xCmZyYW1lX2J1cnkgMApieXRlY18yIC8vIDB4MTUxZjdjNzUKZnJhbWVfZGlnIDAKaXRvYgpjb25jYXQKbG9nCnJldHN1YgoKLy8gd2lubmVySXNfY2FzdGVyCndpbm5lcklzY2FzdGVyXzc6CnByb3RvIDAgMApieXRlYyA0IC8vICIiCmNhbGxzdWIgd2lubmVySXNfMgpmcmFtZV9idXJ5IDAKYnl0ZWNfMiAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCmNvbmNhdApsb2cKcmV0c3ViCgovLyBwZXJjZW50YWdlVHJhbXBfY2FzdGVyCnBlcmNlbnRhZ2VUcmFtcGNhc3Rlcl84Ogpwcm90byAwIDAKaW50Y18wIC8vIDAKY2FsbHN1YiBwZXJjZW50YWdlVHJhbXBfMwpmcmFtZV9idXJ5IDAKYnl0ZWNfMiAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCml0b2IKY29uY2F0CmxvZwpyZXRzdWIKCi8vIHBlcmNlbnRhZ2VCaWRlbl9jYXN0ZXIKcGVyY2VudGFnZUJpZGVuY2FzdGVyXzk6CnByb3RvIDAgMAppbnRjXzAgLy8gMApjYWxsc3ViIHBlcmNlbnRhZ2VCaWRlbl80CmZyYW1lX2J1cnkgMApieXRlY18yIC8vIDB4MTUxZjdjNzUKZnJhbWVfZGlnIDAKaXRvYgpjb25jYXQKbG9nCnJldHN1Yg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 4
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {
        "Biden": {
          "type": "uint64",
          "key": "Biden",
          "descr": "Biden votes"
        },
        "Trump": {
          "type": "uint64",
          "key": "Trump",
          "descr": "Trump votes"
        },
        "Winner": {
          "type": "bytes",
          "key": "Winner",
          "descr": "Winner"
        },
        "pbtBiden": {
          "type": "uint64",
          "key": "pbtBiden",
          "descr": "Biden percentage"
        },
        "pbtTrump": {
          "type": "uint64",
          "key": "pbtTrump",
          "descr": "Trump percentage"
        }
      },
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "votingApp",
    "methods": [
      {
        "name": "voteForTrump",
        "args": [],
        "returns": {
          "type": "uint64"
        }
      },
      {
        "name": "voteForBiden",
        "args": [],
        "returns": {
          "type": "uint64"
        }
      },
      {
        "name": "winnerIs",
        "args": [],
        "returns": {
          "type": "string"
        }
      },
      {
        "name": "percentageTramp",
        "args": [],
        "returns": {
          "type": "uint64"
        }
      },
      {
        "name": "percentageBiden",
        "args": [],
        "returns": {
          "type": "uint64"
        }
      }
    ],
    "networks": {}
  },
  "bare_call_config": {
    "no_op": "CREATE"
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the VotingApp smart contract.
 */
export type VotingApp = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'voteForTrump()uint64' | 'voteForTrump', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
    & Record<'voteForBiden()uint64' | 'voteForBiden', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
    & Record<'winnerIs()string' | 'winnerIs', {
      argsObj: {
      }
      argsTuple: []
      returns: string
    }>
    & Record<'percentageTramp()uint64' | 'percentageTramp', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
    & Record<'percentageBiden()uint64' | 'percentageBiden', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      /**
       * Biden votes
       */
      'Biden'?: IntegerState
      /**
       * Trump votes
       */
      'Trump'?: IntegerState
      /**
       * Winner
       */
      'Winner'?: BinaryState
      /**
       * Biden percentage
       */
      'pbtBiden'?: IntegerState
      /**
       * Trump percentage
       */
      'pbtTrump'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type VotingAppSig = keyof VotingApp['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends VotingAppSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the VotingApp smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends VotingAppSig> = VotingApp['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the VotingApp smart contract to the method's return type
 */
export type MethodReturn<TSignature extends VotingAppSig> = VotingApp['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type VotingAppCreateCalls = (typeof VotingAppCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type VotingAppCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type VotingAppDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: VotingAppCreateCalls) => VotingAppCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class VotingAppCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the votingApp smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the voteForTrump()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static voteForTrump(args: MethodArgs<'voteForTrump()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'voteForTrump()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the voteForBiden()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static voteForBiden(args: MethodArgs<'voteForBiden()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'voteForBiden()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the winnerIs()string ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static winnerIs(args: MethodArgs<'winnerIs()string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'winnerIs()string' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the percentageTramp()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static percentageTramp(args: MethodArgs<'percentageTramp()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'percentageTramp()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the percentageBiden()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static percentageBiden(args: MethodArgs<'percentageBiden()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'percentageBiden()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the votingApp smart contract
 */
export class VotingAppClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `VotingAppClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof VotingApp['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the votingApp smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: VotingAppDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(VotingAppCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the votingApp smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & CoreAppCallArgs & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<undefined>> {
        return $this.appClient.create(args) as unknown as Promise<AppCallTransactionResultOfType<undefined>>
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the votingApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the voteForTrump()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public voteForTrump(args: MethodArgs<'voteForTrump()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(VotingAppCallFactory.voteForTrump(args, params))
  }

  /**
   * Calls the voteForBiden()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public voteForBiden(args: MethodArgs<'voteForBiden()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(VotingAppCallFactory.voteForBiden(args, params))
  }

  /**
   * Calls the winnerIs()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public winnerIs(args: MethodArgs<'winnerIs()string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(VotingAppCallFactory.winnerIs(args, params))
  }

  /**
   * Calls the percentageTramp()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public percentageTramp(args: MethodArgs<'percentageTramp()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(VotingAppCallFactory.percentageTramp(args, params))
  }

  /**
   * Calls the percentageBiden()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public percentageBiden(args: MethodArgs<'percentageBiden()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(VotingAppCallFactory.percentageBiden(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<VotingApp['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get Biden() {
        return VotingAppClient.getIntegerState(state, 'Biden')
      },
      get Trump() {
        return VotingAppClient.getIntegerState(state, 'Trump')
      },
      get Winner() {
        return VotingAppClient.getBinaryState(state, 'Winner')
      },
      get pbtBiden() {
        return VotingAppClient.getIntegerState(state, 'pbtBiden')
      },
      get pbtTrump() {
        return VotingAppClient.getIntegerState(state, 'pbtTrump')
      },
    }
  }

  public compose(): VotingAppComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      voteForTrump(args: MethodArgs<'voteForTrump()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.voteForTrump(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      voteForBiden(args: MethodArgs<'voteForBiden()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.voteForBiden(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      winnerIs(args: MethodArgs<'winnerIs()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.winnerIs(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      percentageTramp(args: MethodArgs<'percentageTramp()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.percentageTramp(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      percentageBiden(args: MethodArgs<'percentageBiden()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.percentageBiden(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate() {
        await promiseChain
        const result = await atc.simulate(client.algod)
        return result
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as VotingAppComposer
  }
}
export type VotingAppComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the voteForTrump()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  voteForTrump(args: MethodArgs<'voteForTrump()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): VotingAppComposer<[...TReturns, MethodReturn<'voteForTrump()uint64'>]>

  /**
   * Calls the voteForBiden()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  voteForBiden(args: MethodArgs<'voteForBiden()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): VotingAppComposer<[...TReturns, MethodReturn<'voteForBiden()uint64'>]>

  /**
   * Calls the winnerIs()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  winnerIs(args: MethodArgs<'winnerIs()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): VotingAppComposer<[...TReturns, MethodReturn<'winnerIs()string'>]>

  /**
   * Calls the percentageTramp()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  percentageTramp(args: MethodArgs<'percentageTramp()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): VotingAppComposer<[...TReturns, MethodReturn<'percentageTramp()uint64'>]>

  /**
   * Calls the percentageBiden()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  percentageBiden(args: MethodArgs<'percentageBiden()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): VotingAppComposer<[...TReturns, MethodReturn<'percentageBiden()uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the votingApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): VotingAppComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): VotingAppComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(): Promise<VotingAppComposerSimulateResult>
  /**
   * Executes the transaction group and returns the results
   */
  execute(): Promise<VotingAppComposerResults<TReturns>>
}
export type VotingAppComposerSimulateResult = {
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type VotingAppComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
