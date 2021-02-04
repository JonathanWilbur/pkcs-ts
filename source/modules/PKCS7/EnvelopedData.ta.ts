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
import {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../PKCS7/OriginatorInfo.ta";
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../PKCS7/RecipientInfos.ta";
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
export {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../PKCS7/OriginatorInfo.ta";
export {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../PKCS7/RecipientInfos.ta";
export { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";

/* START_OF_SYMBOL_DEFINITION EnvelopedData */
/**
 * @summary EnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData ::= SEQUENCE {
 *     version                Version,
 *     originatorInfo         [0]  OriginatorInfo OPTIONAL,
 *     recipientInfos         RecipientInfos,
 *     encryptedContentInfo   EncryptedContentInfo,
 *     unprotectedAttributes  [1]  Attributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EnvelopedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `originatorInfo`.
         * @public
         * @readonly
         */
        readonly originatorInfo: OPTIONAL<OriginatorInfo>,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
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
     * @summary Restructures an object into a EnvelopedData
     * @description
     *
     * This takes an `object` and converts it to a `EnvelopedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnvelopedData`.
     * @returns {EnvelopedData}
     */
    public static _from_object(
        _o: { [_K in keyof EnvelopedData]: EnvelopedData[_K] }
    ): EnvelopedData {
        return new EnvelopedData(
            _o.version,
            _o.originatorInfo,
            _o.recipientInfos,
            _o.encryptedContentInfo,
            _o.unprotectedAttributes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnvelopedData */
/**
 * @summary The Leading Root Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnvelopedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "originatorInfo",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "recipientInfos",
        false,
        $.hasTag(_TagClass.universal, 17),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnvelopedData */
/**
 * @summary The Trailing Root Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnvelopedData */
/**
 * @summary The Extension Addition Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData */
let _cached_decoder_for_EnvelopedData: $.ASN1Decoder<EnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _decode_EnvelopedData */
/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvelopedData} The decoded data structure.
 */
export function _decode_EnvelopedData(el: _Element) {
    if (!_cached_decoder_for_EnvelopedData) {
        _cached_decoder_for_EnvelopedData = function (
            el: _Element
        ): EnvelopedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let originatorInfo: OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttributes: OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                originatorInfo: (_el: _Element): void => {
                    originatorInfo = $._decode_implicit<OriginatorInfo>(
                        () => _decode_OriginatorInfo
                    )(_el);
                },
                recipientInfos: (_el: _Element): void => {
                    recipientInfos = _decode_RecipientInfos(_el);
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
                _root_component_type_list_1_spec_for_EnvelopedData,
                _extension_additions_list_spec_for_EnvelopedData,
                _root_component_type_list_2_spec_for_EnvelopedData,
                undefined
            );
            return new EnvelopedData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                originatorInfo,
                recipientInfos,
                encryptedContentInfo,
                unprotectedAttributes
            );
        };
    }
    return _cached_decoder_for_EnvelopedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData */
let _cached_encoder_for_EnvelopedData: $.ASN1Encoder<EnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _encode_EnvelopedData */
/**
 * @summary Encodes a(n) EnvelopedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopedData, encoded as an ASN.1 Element.
 */
export function _encode_EnvelopedData(
    value: EnvelopedData,
    elGetter: $.ASN1Encoder<EnvelopedData>
) {
    if (!_cached_encoder_for_EnvelopedData) {
        _cached_encoder_for_EnvelopedData = function (
            value: EnvelopedData,
            elGetter: $.ASN1Encoder<EnvelopedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  $.BER
                              )(value.originatorInfo, $.BER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            $.BER
                        ),
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
    return _cached_encoder_for_EnvelopedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnvelopedData */

/* eslint-enable */
