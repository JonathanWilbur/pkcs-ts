/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessControlRule,
    _decode_AccessControlRule,
    _encode_AccessControlRule,
} from "../PKCS-15/AccessControlRule.ta";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
import { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta";
export {
    AccessControlRule,
    _decode_AccessControlRule,
    _encode_AccessControlRule,
} from "../PKCS-15/AccessControlRule.ta";
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
export { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta";

/* START_OF_SYMBOL_DEFINITION UnusedSpace */
/**
 * @summary UnusedSpace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnusedSpace ::= SEQUENCE {
 *     path  Path (WITH COMPONENTS {..., index PRESENT, length PRESENT}),
 *     authId Identifier OPTIONAL,
 *     ...,
 *     accessControlRules SEQUENCE OF AccessControlRule OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UnusedSpace {
    constructor(
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: Path,
        /**
         * @summary `authId`.
         * @public
         * @readonly
         */
        readonly authId: OPTIONAL<Identifier>,
        /**
         * @summary `accessControlRules`.
         * @public
         * @readonly
         */
        readonly accessControlRules: OPTIONAL<AccessControlRule[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UnusedSpace
     * @description
     *
     * This takes an `object` and converts it to a `UnusedSpace`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnusedSpace`.
     * @returns {UnusedSpace}
     */
    public static _from_object(
        _o: { [_K in keyof UnusedSpace]: UnusedSpace[_K] }
    ): UnusedSpace {
        return new UnusedSpace(
            _o.path,
            _o.authId,
            _o.accessControlRules,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnusedSpace */
/**
 * @summary The Leading Root Component Types of UnusedSpace
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnusedSpace: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "path",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authId",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnusedSpace */
/**
 * @summary The Trailing Root Component Types of UnusedSpace
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnusedSpace: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnusedSpace */
/**
 * @summary The Extension Addition Component Types of UnusedSpace
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnusedSpace: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessControlRules",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnusedSpace */
let _cached_decoder_for_UnusedSpace: $.ASN1Decoder<UnusedSpace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _decode_UnusedSpace */
/**
 * @summary Decodes an ASN.1 element into a(n) UnusedSpace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnusedSpace} The decoded data structure.
 */
export function _decode_UnusedSpace(el: _Element) {
    if (!_cached_decoder_for_UnusedSpace) {
        _cached_decoder_for_UnusedSpace = function (el: _Element): UnusedSpace {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let path!: Path;
            let authId: OPTIONAL<Identifier>;
            let accessControlRules: OPTIONAL<AccessControlRule[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                path: (_el: _Element): void => {
                    path = _decode_Path(_el);
                },
                authId: (_el: _Element): void => {
                    authId = _decode_Identifier(_el);
                },
                accessControlRules: (_el: _Element): void => {
                    accessControlRules = $._decodeSequenceOf<AccessControlRule>(
                        () => _decode_AccessControlRule
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UnusedSpace,
                _extension_additions_list_spec_for_UnusedSpace,
                _root_component_type_list_2_spec_for_UnusedSpace,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UnusedSpace(
                /* SEQUENCE_CONSTRUCTOR_CALL */ path,
                authId,
                accessControlRules,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UnusedSpace(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnusedSpace */
let _cached_encoder_for_UnusedSpace: $.ASN1Encoder<UnusedSpace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnusedSpace */

/* START_OF_SYMBOL_DEFINITION _encode_UnusedSpace */
/**
 * @summary Encodes a(n) UnusedSpace into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnusedSpace, encoded as an ASN.1 Element.
 */
export function _encode_UnusedSpace(
    value: UnusedSpace,
    elGetter: $.ASN1Encoder<UnusedSpace>
) {
    if (!_cached_encoder_for_UnusedSpace) {
        _cached_encoder_for_UnusedSpace = function (
            value: UnusedSpace,
            elGetter: $.ASN1Encoder<UnusedSpace>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Path(value.path, $.BER),
                            /* IF_ABSENT  */ value.authId === undefined
                                ? undefined
                                : _encode_Identifier(value.authId, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.accessControlRules ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<AccessControlRule>(
                                      () => _encode_AccessControlRule,
                                      $.BER
                                  )(value.accessControlRules, $.BER),
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
    return _cached_encoder_for_UnusedSpace(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnusedSpace */

/* eslint-enable */
