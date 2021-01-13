/* eslint-disable */
import { PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { pkcs_9_at_countryOfResidence } from "../PKCS-9/pkcs-9-at-countryOfResidence.va";
import { caseIgnoreMatch } from "x500-ts/dist/node/modules/SelectedAttributeTypes/caseIgnoreMatch.oa";

/* START_OF_SYMBOL_DEFINITION countryOfResidence */
/**
 * @summary countryOfResidence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryOfResidence ATTRIBUTE ::= {
 *         WITH SYNTAX PrintableString (SIZE(2))(CONSTRAINED BY {
 *         -- Must be a two-letter country acronym in accordance with
 *         -- ISO/IEC 3166 --})
 *         EQUALITY MATCHING RULE caseIgnoreMatch
 *         ID pkcs-9-at-countryOfResidence
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export const countryOfResidence: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_countryOfResidence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryOfResidence */

/* eslint-enable */
