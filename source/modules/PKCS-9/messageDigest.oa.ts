/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import {
    MessageDigest,
    _decode_MessageDigest,
    _encode_MessageDigest,
} from "../PKCS-9/MessageDigest.ta";
import { pkcs_9_at_messageDigest } from "../PKCS-9/pkcs-9-at-messageDigest.va";
import { octetStringMatch } from "x500-ts/dist/node/modules/SelectedAttributeTypes/octetStringMatch.oa";

/* START_OF_SYMBOL_DEFINITION messageDigest */
/**
 * @summary messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * messageDigest ATTRIBUTE ::= {
 *         WITH SYNTAX MessageDigest
 *         EQUALITY MATCHING RULE octetStringMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-messageDigest
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MessageDigest>}
 * @implements {ATTRIBUTE<MessageDigest>}
 */
export const messageDigest: ATTRIBUTE<MessageDigest> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MessageDigest,
    },
    encoderFor: {
        "&Type": _encode_MessageDigest,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION messageDigest */

/* eslint-enable */
