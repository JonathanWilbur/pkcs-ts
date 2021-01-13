/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import {
    ExtensionRequest,
    _decode_ExtensionRequest,
    _encode_ExtensionRequest,
} from "../PKCS-9/ExtensionRequest.ta";
import { pkcs_9_at_extensionRequest } from "../PKCS-9/pkcs-9-at-extensionRequest.va";

/* START_OF_SYMBOL_DEFINITION extensionRequest */
/**
 * @summary extensionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionRequest ATTRIBUTE ::= {
 *         WITH SYNTAX ExtensionRequest
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-extensionRequest
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ExtensionRequest>}
 * @implements {ATTRIBUTE<ExtensionRequest>}
 */
export const extensionRequest: ATTRIBUTE<ExtensionRequest> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtensionRequest,
    },
    encoderFor: {
        "&Type": _encode_ExtensionRequest,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_extensionRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extensionRequest */

/* eslint-enable */
