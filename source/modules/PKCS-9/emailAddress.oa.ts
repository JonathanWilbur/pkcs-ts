/* eslint-disable */
import { IA5String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { pkcs_9_at_emailAddress } from "../PKCS-9/pkcs-9-at-emailAddress.va";
import { pkcs9CaseIgnoreMatch } from "../PKCS-9/pkcs9CaseIgnoreMatch.oa";

/* START_OF_SYMBOL_DEFINITION emailAddress */
/**
 * @summary emailAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emailAddress ATTRIBUTE ::= {
 *         WITH SYNTAX IA5String (SIZE(1..pkcs-9-ub-emailAddress))
 *         EQUALITY MATCHING RULE pkcs9CaseIgnoreMatch
 *         ID pkcs-9-at-emailAddress
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export const emailAddress: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": pkcs9CaseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_emailAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION emailAddress */

/* eslint-enable */
