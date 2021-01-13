/* eslint-disable */
import { MATCHING_RULE } from "x500-ts/dist/node/modules/InformationFramework/MATCHING-RULE.oca";
import { pkcs_9_mr_caseIgnoreMatch } from "../PKCS-9/pkcs-9-mr-caseIgnoreMatch.va";
import {
    PKCS9String,
    _decode_PKCS9String,
    _encode_PKCS9String,
} from "../PKCS-9/PKCS9String.ta";

/* START_OF_SYMBOL_DEFINITION pkcs9CaseIgnoreMatch */
/**
 * @summary pkcs9CaseIgnoreMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs9CaseIgnoreMatch MATCHING-RULE ::= {
 *         SYNTAX PKCS9String {pkcs-9-ub-match}
 *         ID pkcs-9-mr-caseIgnoreMatch
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<PKCS9String>}
 * @implements {MATCHING_RULE<PKCS9String>}
 */
export const pkcs9CaseIgnoreMatch: MATCHING_RULE<PKCS9String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PKCS9String,
    },
    encoderFor: {
        "&AssertionType": _encode_PKCS9String,
    },
    "&id": pkcs_9_mr_caseIgnoreMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkcs9CaseIgnoreMatch */

/* eslint-enable */
