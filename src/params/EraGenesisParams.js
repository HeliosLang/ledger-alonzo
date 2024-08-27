import { COST_MODEL_PARAMS } from "./CostModelParams.js"

/**
 * @typedef {import("./CostModelParams.js").CostModelParams} CostModelParams
 */

/**
 * @typedef {{
 *   collateralPercentage: number
 *   maxCollateralInputs: number
 *   maxValueSize: number
 * }} CommonAlonzoBabbageParams
 */

/**
 * Named `EraGenesisParams` and not `GenesisParams` to avoid confusion with the actual genesis
 * @typedef {CommonAlonzoBabbageParams & {
 *   costModels: {
 *     PlutusV1: CostModelParams
 *   }
 *   executionPrices: {
 *     prSteps: {
 *       numerator: number
 *       denominator: 10000000
 *     }
 *     prMem: {
 *       numerator: 577,
 *       denominator: 10000
 *     }
 *   }
 *   lovelacePerUTxOWord: number
 *   maxBlockExUnits: {
 *     exUnitsMem: number
 *     exUnitsSteps: number
 *   }
 *   maxTxExUnits: {
 *     exUnitsMem: number
 *     exUnitsSteps: number
 *   }
 * }} EraGenesisParams
 */

/**
 * @type {EraGenesisParams}
 */
export const ERA_GENESIS_PARAMS = {
    collateralPercentage: 150,
    costModels: {
        PlutusV1: COST_MODEL_PARAMS
    },
    executionPrices: {
        prSteps: {
            numerator: 721,
            denominator: 10000000
        },
        prMem: {
            numerator: 577,
            denominator: 10000
        }
    },
    lovelacePerUTxOWord: 34482,
    maxBlockExUnits: {
        exUnitsMem: 50000000,
        exUnitsSteps: 40000000000
    },
    maxCollateralInputs: 3,
    maxTxExUnits: {
        exUnitsMem: 10000000,
        exUnitsSteps: 10000000000
    },
    maxValueSize: 5000
}
