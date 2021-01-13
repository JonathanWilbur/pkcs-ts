/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { pkcs_9_at_unstructuredName } from "../PKCS-9/pkcs-9-at-unstructuredName.va";
import { pkcs9CaseIgnoreMatch } from "../PKCS-9/pkcs9CaseIgnoreMatch.oa";
import {
    PKCS9String,
    _decode_PKCS9String,
    _encode_PKCS9String,
} from "../PKCS-9/PKCS9String.ta";

/* START_OF_SYMBOL_DEFINITION unstructuredName */
/**
 * @summary unstructuredName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unstructuredName ATTRIBUTE ::= {
 *         WITH SYNTAX PKCS9String {pkcs-9-ub-unstructuredName}
 *         EQUALITY MATCHING RULE pkcs9CaseIgnoreMatch
 *         ID pkcs-9-at-unstructuredName
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PKCS9String>}
 * @implements {ATTRIBUTE<PKCS9String>}
 */
export const unstructuredName: ATTRIBUTE<PKCS9String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PKCS9String,
    },
    encoderFor: {
        "&Type": _encode_PKCS9String,
    },
    "&equality-match": pkcs9CaseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_unstructuredName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION unstructuredName */

/* eslint-enable */
