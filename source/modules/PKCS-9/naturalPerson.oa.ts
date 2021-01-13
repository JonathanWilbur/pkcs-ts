/* eslint-disable */
import type { OBJECT_CLASS } from "x500-ts/dist/node/modules/InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/ObjectClassKind.ta";
import { top } from "x500-ts/dist/node/modules/InformationFramework/top.oa";
import { NaturalPersonAttributeSet } from "../PKCS-9/NaturalPersonAttributeSet.osa";
import { pkcs_9_oc_naturalPerson } from "../PKCS-9/pkcs-9-oc-naturalPerson.va";

/* START_OF_SYMBOL_DEFINITION naturalPerson */
/**
 * @summary naturalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * naturalPerson OBJECT-CLASS ::= {
 *         SUBCLASS OF     { top }
 *         KIND            auxiliary
 *         MAY CONTAIN     { NaturalPersonAttributeSet }
 *         ID              pkcs-9-oc-naturalPerson
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const naturalPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        ...NaturalPersonAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_oc_naturalPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION naturalPerson */

/* eslint-enable */
