/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { pkcs_9_at_placeOfBirth } from "../PKCS-9/pkcs-9-at-placeOfBirth.va";
import { caseExactMatch } from "x500-ts/dist/node/modules/SelectedAttributeTypes/caseExactMatch.oa";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION placeOfBirth */
/**
 * @summary placeOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * placeOfBirth ATTRIBUTE ::= {
 *         WITH SYNTAX DirectoryString {pkcs-9-ub-placeOfBirth}
 *         EQUALITY MATCHING RULE caseExactMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-placeOfBirth
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export const placeOfBirth: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_placeOfBirth /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION placeOfBirth */

/* eslint-enable */
