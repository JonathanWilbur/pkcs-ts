/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { objectIdentifierMatch } from "x500-ts/dist/node/modules/InformationFramework/objectIdentifierMatch.oa";
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from "../PKCS-9/ContentType.ta";
import { pkcs_9_at_contentType } from "../PKCS-9/pkcs-9-at-contentType.va";

/* START_OF_SYMBOL_DEFINITION contentType */
/**
 * @summary contentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contentType ATTRIBUTE ::= {
 *         WITH SYNTAX ContentType
 *         EQUALITY MATCHING RULE objectIdentifierMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-contentType
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContentType>}
 * @implements {ATTRIBUTE<ContentType>}
 */
export const contentType: ATTRIBUTE<ContentType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContentType,
    },
    encoderFor: {
        "&Type": _encode_ContentType,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_contentType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contentType */

/* eslint-enable */
