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
