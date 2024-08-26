import { ALONZO_GENESIS_COST_MODEL_PARAMS } from "@helios-lang/uplc"

/**
 * @typedef {import("@helios-lang/uplc").CostModelParamsV1} CostModelParamsV1
 */

/**
 * @typedef {{
 *   collateralPercentage: number
 *   costModels: {
 *     PlutusV1: CostModelParamsV1
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
 *   maxCollateralInputs: number
 *   maxTxExUnits: {
 *     exUnitsMem: number
 *     exUnitsSteps: number
 *   }
 *   maxValueSize: number
 * }} AlonzoGenesisParams
 */

/**
 * @type {AlonzoGenesisParams}
 */
export const ALONZO_GENESIS_PARAMS = {
    lovelacePerUTxOWord: 34482,
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
    maxTxExUnits: {
        exUnitsMem: 10000000,
        exUnitsSteps: 10000000000
    },
    maxBlockExUnits: {
        exUnitsMem: 50000000,
        exUnitsSteps: 40000000000
    },
    maxValueSize: 5000,
    collateralPercentage: 150,
    maxCollateralInputs: 3,
    costModels: {
        PlutusV1: ALONZO_GENESIS_COST_MODEL_PARAMS
    }
}
