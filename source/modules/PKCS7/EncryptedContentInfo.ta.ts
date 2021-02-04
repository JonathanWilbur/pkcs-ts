/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../PKCS7/ContentEncryptionAlgorithmIdentifier.ta";
import {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../PKCS7/ENCRYPTED.ta";
export {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../PKCS7/ContentEncryptionAlgorithmIdentifier.ta";
export {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../PKCS7/ENCRYPTED.ta";
export { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";
export { PKCS7ContentTable } from "../PKCS7/PKCS7ContentTable.osa";

/* START_OF_SYMBOL_DEFINITION EncryptedContentInfo */
/**
 * @summary EncryptedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfo ::= SEQUENCE {
 *     contentType                 PKCS7-CONTENT-TYPE.&id({PKCS7ContentTable}),
 *     contentEncryptionAlgorithm  ContentEncryptionAlgorithmIdentifier,
 *     encryptedContent
 *         [0]  ENCRYPTED{PKCS7-CONTENT-TYPE.&Type
 *                         ({PKCS7ContentTable}{@.contentType})} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncryptedContentInfo {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OBJECT_IDENTIFIER,
        /**
         * @summary `contentEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly contentEncryptionAlgorithm: ContentEncryptionAlgorithmIdentifier,
        /**
         * @summary `encryptedContent`.
         * @public
         * @readonly
         */
        readonly encryptedContent: OPTIONAL<ENCRYPTED<_Element>>
    ) {}

    /**
     * @summary Restructures an object into a EncryptedContentInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedContentInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedContentInfo`.
     * @returns {EncryptedContentInfo}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedContentInfo]: EncryptedContentInfo[_K] }
    ): EncryptedContentInfo {
        return new EncryptedContentInfo(
            _o.contentType,
            _o.contentEncryptionAlgorithm,
            _o.encryptedContent
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfo */
/**
 * @summary The Leading Root Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contentType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contentEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedContent",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfo */
/**
 * @summary The Trailing Root Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfo */
/**
 * @summary The Extension Addition Component Types of EncryptedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo */
let _cached_decoder_for_EncryptedContentInfo: $.ASN1Decoder<EncryptedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedContentInfo} The decoded data structure.
 */
export function _decode_EncryptedContentInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedContentInfo) {
        _cached_decoder_for_EncryptedContentInfo = function (
            el: _Element
        ): EncryptedContentInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contentType!: OBJECT_IDENTIFIER;
            let contentEncryptionAlgorithm!: ContentEncryptionAlgorithmIdentifier;
            let encryptedContent: OPTIONAL<ENCRYPTED<_Element>>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contentType: (_el: _Element): void => {
                    contentType = $._decodeObjectIdentifier(_el);
                },
                contentEncryptionAlgorithm: (_el: _Element): void => {
                    contentEncryptionAlgorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedContent: (_el: _Element): void => {
                    encryptedContent = $._decode_implicit<ENCRYPTED<_Element>>(
                        () => _get_decoder_for_ENCRYPTED<_Element>($._decodeAny)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedContentInfo,
                _extension_additions_list_spec_for_EncryptedContentInfo,
                _root_component_type_list_2_spec_for_EncryptedContentInfo,
                undefined
            );
            return new EncryptedContentInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contentType,
                contentEncryptionAlgorithm,
                encryptedContent
            );
        };
    }
    return _cached_decoder_for_EncryptedContentInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo */
let _cached_encoder_for_EncryptedContentInfo: $.ASN1Encoder<EncryptedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo */
/**
 * @summary Encodes a(n) EncryptedContentInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedContentInfo(
    value: EncryptedContentInfo,
    elGetter: $.ASN1Encoder<EncryptedContentInfo>
) {
    if (!_cached_encoder_for_EncryptedContentInfo) {
        _cached_encoder_for_EncryptedContentInfo = function (
            value: EncryptedContentInfo,
            elGetter: $.ASN1Encoder<EncryptedContentInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.contentType,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ContentEncryptionAlgorithmIdentifier(
                            value.contentEncryptionAlgorithm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.encryptedContent === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _get_encoder_for_ENCRYPTED<_Element>(
                                          $._encodeAny
                                      ),
                                  $.BER
                              )(value.encryptedContent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo */

/* eslint-enable */
