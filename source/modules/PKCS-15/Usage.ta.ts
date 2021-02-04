/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyUsage,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "x500-ts/dist/node/modules/CertificateExtensions/KeyUsage.ta";

/* START_OF_SYMBOL_DEFINITION Usage */
/**
 * @summary Usage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Usage ::= SEQUENCE {
 *     keyUsage KeyUsage OPTIONAL,
 *     extKeyUsage SEQUENCE SIZE (1..MAX) OF OBJECT IDENTIFIER OPTIONAL
 * }(WITH COMPONENTS {..., keyUsage PRESENT} | WITH COMPONENTS {..., extKeyUsage PRESENT})
 * ```
 *
 * @class
 */
export class Usage {
    constructor(
        /**
         * @summary `keyUsage`.
         * @public
         * @readonly
         */
        readonly keyUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `extKeyUsage`.
         * @public
         * @readonly
         */
        readonly extKeyUsage: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {}

    /**
     * @summary Restructures an object into a Usage
     * @description
     *
     * This takes an `object` and converts it to a `Usage`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Usage`.
     * @returns {Usage}
     */
    public static _from_object(_o: { [_K in keyof Usage]: Usage[_K] }): Usage {
        return new Usage(_o.keyUsage, _o.extKeyUsage);
    }
}
/* END_OF_SYMBOL_DEFINITION Usage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Usage */
/**
 * @summary The Leading Root Component Types of Usage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Usage: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyUsage",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extKeyUsage",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Usage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Usage */
/**
 * @summary The Trailing Root Component Types of Usage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Usage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Usage */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Usage */
/**
 * @summary The Extension Addition Component Types of Usage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Usage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Usage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Usage */
let _cached_decoder_for_Usage: $.ASN1Decoder<Usage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Usage */

/* START_OF_SYMBOL_DEFINITION _decode_Usage */
/**
 * @summary Decodes an ASN.1 element into a(n) Usage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Usage} The decoded data structure.
 */
export function _decode_Usage(el: _Element) {
    if (!_cached_decoder_for_Usage) {
        _cached_decoder_for_Usage = function (el: _Element): Usage {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyUsage: OPTIONAL<KeyUsage>;
            let extKeyUsage: OPTIONAL<OBJECT_IDENTIFIER[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                keyUsage: (_el: _Element): void => {
                    keyUsage = _decode_KeyUsage(_el);
                },
                extKeyUsage: (_el: _Element): void => {
                    extKeyUsage = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Usage,
                _extension_additions_list_spec_for_Usage,
                _root_component_type_list_2_spec_for_Usage,
                undefined
            );
            return new Usage(
                /* SEQUENCE_CONSTRUCTOR_CALL */ keyUsage,
                extKeyUsage
            );
        };
    }
    return _cached_decoder_for_Usage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Usage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Usage */
let _cached_encoder_for_Usage: $.ASN1Encoder<Usage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Usage */

/* START_OF_SYMBOL_DEFINITION _encode_Usage */
/**
 * @summary Encodes a(n) Usage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Usage, encoded as an ASN.1 Element.
 */
export function _encode_Usage(value: Usage, elGetter: $.ASN1Encoder<Usage>) {
    if (!_cached_encoder_for_Usage) {
        _cached_encoder_for_Usage = function (
            value: Usage,
            elGetter: $.ASN1Encoder<Usage>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.keyUsage === undefined
                            ? undefined
                            : _encode_KeyUsage(value.keyUsage, $.BER),
                        /* IF_ABSENT  */ value.extKeyUsage === undefined
                            ? undefined
                            : $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.extKeyUsage, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Usage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Usage */

/* eslint-enable */
