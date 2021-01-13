/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessMode,
    _decode_AccessMode,
    _encode_AccessMode,
} from "../PKCS-15/AccessMode.ta";
import {
    SecurityCondition,
    _decode_SecurityCondition,
    _encode_SecurityCondition,
} from "../PKCS-15/SecurityCondition.ta";
export {
    AccessMode,
    AccessMode_execute /* IMPORTED_LONG_NAMED_BIT */,
    AccessMode_read /* IMPORTED_LONG_NAMED_BIT */,
    AccessMode_update /* IMPORTED_LONG_NAMED_BIT */,
    execute /* IMPORTED_SHORT_NAMED_BIT */,
    read /* IMPORTED_SHORT_NAMED_BIT */,
    update /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_AccessMode,
    _encode_AccessMode,
} from "../PKCS-15/AccessMode.ta";
export {
    SecurityCondition,
    _decode_SecurityCondition,
    _encode_SecurityCondition,
} from "../PKCS-15/SecurityCondition.ta";

/* START_OF_SYMBOL_DEFINITION AccessControlRule */
/**
 * @summary AccessControlRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlRule ::= SEQUENCE {
 *     accessMode AccessMode,
 *     securityCondition SecurityCondition,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class AccessControlRule {
    constructor(
        /**
         * @summary `accessMode`.
         * @public
         * @readonly
         */
        readonly accessMode: AccessMode,
        /**
         * @summary `securityCondition`.
         * @public
         * @readonly
         */
        readonly securityCondition: SecurityCondition,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessControlRule
     * @description
     *
     * This takes an `object` and converts it to a `AccessControlRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessControlRule`.
     * @returns {AccessControlRule}
     */
    public static _from_object(
        _o: { [_K in keyof AccessControlRule]: AccessControlRule[_K] }
    ): AccessControlRule {
        return new AccessControlRule(
            _o.accessMode,
            _o.securityCondition,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AccessControlRule */
/**
 * @summary The Leading Root Component Types of AccessControlRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessControlRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessMode",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityCondition",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AccessControlRule */
/**
 * @summary The Trailing Root Component Types of AccessControlRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessControlRule: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AccessControlRule */
/**
 * @summary The Extension Addition Component Types of AccessControlRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessControlRule: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControlRule */
let _cached_decoder_for_AccessControlRule: $.ASN1Decoder<AccessControlRule> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _decode_AccessControlRule */
/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessControlRule} The decoded data structure.
 */
export function _decode_AccessControlRule(el: _Element) {
    if (!_cached_decoder_for_AccessControlRule) {
        _cached_decoder_for_AccessControlRule = function (
            el: _Element
        ): AccessControlRule {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AccessControlRule contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "accessMode";
            sequence[1].name = "securityCondition";
            let accessMode!: AccessMode;
            let securityCondition!: SecurityCondition;
            accessMode = _decode_AccessMode(sequence[0]);
            securityCondition = _decode_SecurityCondition(sequence[1]);
            return new AccessControlRule(
                accessMode,
                securityCondition,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AccessControlRule(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControlRule */
let _cached_encoder_for_AccessControlRule: $.ASN1Encoder<AccessControlRule> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControlRule */

/* START_OF_SYMBOL_DEFINITION _encode_AccessControlRule */
/**
 * @summary Encodes a(n) AccessControlRule into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlRule, encoded as an ASN.1 Element.
 */
export function _encode_AccessControlRule(
    value: AccessControlRule,
    elGetter: $.ASN1Encoder<AccessControlRule>
) {
    if (!_cached_encoder_for_AccessControlRule) {
        _cached_encoder_for_AccessControlRule = function (
            value: AccessControlRule,
            elGetter: $.ASN1Encoder<AccessControlRule>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AccessMode(
                                value.accessMode,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SecurityCondition(
                                value.securityCondition,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AccessControlRule(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccessControlRule */

/* eslint-enable */
