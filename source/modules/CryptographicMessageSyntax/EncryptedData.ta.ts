/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta";
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../CryptographicMessageSyntax/EncryptedContentInfo.ta";
import {
    UnprotectedAttributes,
    _decode_UnprotectedAttributes,
    _encode_UnprotectedAttributes,
} from "../CryptographicMessageSyntax/UnprotectedAttributes.ta";
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta";
export {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../CryptographicMessageSyntax/EncryptedContentInfo.ta";
export {
    UnprotectedAttributes,
    _decode_UnprotectedAttributes,
    _encode_UnprotectedAttributes,
} from "../CryptographicMessageSyntax/UnprotectedAttributes.ta";

/* START_OF_SYMBOL_DEFINITION EncryptedData */
/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData ::= SEQUENCE {
 *   version               CMSVersion,
 *   encryptedContentInfo  EncryptedContentInfo,
 *   unprotectedAttrs      [1] IMPLICIT UnprotectedAttributes OPTIONAL
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
        readonly version: CMSVersion,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary `unprotectedAttrs`.
         * @public
         * @readonly
         */
        readonly unprotectedAttrs: OPTIONAL<UnprotectedAttributes>
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
            _o.unprotectedAttrs
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
        "unprotectedAttrs",
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
            let version!: CMSVersion;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttrs: OPTIONAL<UnprotectedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                encryptedContentInfo: (_el: _Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttrs: (_el: _Element): void => {
                    unprotectedAttrs = $._decode_implicit<UnprotectedAttributes>(
                        () => _decode_UnprotectedAttributes
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
                unprotectedAttrs
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
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UnprotectedAttributes,
                                  $.BER
                              )(value.unprotectedAttrs, $.BER),
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
