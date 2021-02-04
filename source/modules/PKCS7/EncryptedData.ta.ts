/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKCS7/Attributes.ta";
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../PKCS7/EncryptedContentInfo.ta";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";
export {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKCS7/Attributes.ta";
export {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../PKCS7/EncryptedContentInfo.ta";
export { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";

/* START_OF_SYMBOL_DEFINITION EncryptedData */
/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData ::= SEQUENCE {
 *     version                Version,
 *     encryptedContentInfo   EncryptedContentInfo,
 *     unprotectedAttributes  [1]  Attributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncryptedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary `unprotectedAttributes`.
         * @public
         * @readonly
         */
        readonly unprotectedAttributes: OPTIONAL<Attributes>
    ) {}

    /**
     * @summary Restructures an object into a EncryptedData
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedData`.
     * @returns {EncryptedData}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedData]: EncryptedData[_K] }
    ): EncryptedData {
        return new EncryptedData(
            _o.version,
            _o.encryptedContentInfo,
            _o.unprotectedAttributes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedData */
/**
 * @summary The Leading Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedContentInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unprotectedAttributes",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedData */
/**
 * @summary The Trailing Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedData */
/**
 * @summary The Extension Addition Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedData */
let _cached_decoder_for_EncryptedData: $.ASN1Decoder<EncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedData */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedData} The decoded data structure.
 */
export function _decode_EncryptedData(el: _Element) {
    if (!_cached_decoder_for_EncryptedData) {
        _cached_decoder_for_EncryptedData = function (
            el: _Element
        ): EncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttributes: OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                encryptedContentInfo: (_el: _Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttributes: (_el: _Element): void => {
                    unprotectedAttributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedData,
                _extension_additions_list_spec_for_EncryptedData,
                _root_component_type_list_2_spec_for_EncryptedData,
                undefined
            );
            return new EncryptedData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                encryptedContentInfo,
                unprotectedAttributes
            );
        };
    }
    return _cached_decoder_for_EncryptedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedData */
let _cached_encoder_for_EncryptedData: $.ASN1Encoder<EncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedData */
/**
 * @summary Encodes a(n) EncryptedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedData(
    value: EncryptedData,
    elGetter: $.ASN1Encoder<EncryptedData>
) {
    if (!_cached_encoder_for_EncryptedData) {
        _cached_encoder_for_EncryptedData = function (
            value: EncryptedData,
            elGetter: $.ASN1Encoder<EncryptedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttributes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.unprotectedAttributes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedData */

/* eslint-enable */
