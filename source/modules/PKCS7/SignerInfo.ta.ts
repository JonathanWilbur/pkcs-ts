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
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../PKCS7/DigestAlgorithmIdentifier.ta";
import {
    DigestEncryptionAlgorithmIdentifier,
    _decode_DigestEncryptionAlgorithmIdentifier,
    _encode_DigestEncryptionAlgorithmIdentifier,
} from "../PKCS7/DigestEncryptionAlgorithmIdentifier.ta";
import {
    EncryptedDigest,
    _decode_EncryptedDigest,
    _encode_EncryptedDigest,
} from "../PKCS7/EncryptedDigest.ta";
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../PKCS7/SignerIdentifier.ta";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";
export {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKCS7/Attributes.ta";
export {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../PKCS7/DigestAlgorithmIdentifier.ta";
export {
    DigestEncryptionAlgorithmIdentifier,
    _decode_DigestEncryptionAlgorithmIdentifier,
    _encode_DigestEncryptionAlgorithmIdentifier,
} from "../PKCS7/DigestEncryptionAlgorithmIdentifier.ta";
export {
    EncryptedDigest,
    _decode_EncryptedDigest,
    _encode_EncryptedDigest,
} from "../PKCS7/EncryptedDigest.ta";
export {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../PKCS7/SignerIdentifier.ta";
export { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";

/* START_OF_SYMBOL_DEFINITION SignerInfo */
/**
 * @summary SignerInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfo ::= SEQUENCE {
 *     version                    Version,
 *     signerIdentifier           SignerIdentifier,
 *     digestAlgorithm            DigestAlgorithmIdentifier,
 *     authenticatedAttributes    [0]  Attributes OPTIONAL,
 *     digestEncryptionAlgorithm  DigestEncryptionAlgorithmIdentifier,
 *     encryptedDigest            EncryptedDigest,
 *     unauthenticatedAttributes  [1]  Attributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SignerInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `signerIdentifier`.
         * @public
         * @readonly
         */
        readonly signerIdentifier: SignerIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `authenticatedAttributes`.
         * @public
         * @readonly
         */
        readonly authenticatedAttributes: OPTIONAL<Attributes>,
        /**
         * @summary `digestEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestEncryptionAlgorithm: DigestEncryptionAlgorithmIdentifier,
        /**
         * @summary `encryptedDigest`.
         * @public
         * @readonly
         */
        readonly encryptedDigest: EncryptedDigest,
        /**
         * @summary `unauthenticatedAttributes`.
         * @public
         * @readonly
         */
        readonly unauthenticatedAttributes: OPTIONAL<Attributes>
    ) {}

    /**
     * @summary Restructures an object into a SignerInfo
     * @description
     *
     * This takes an `object` and converts it to a `SignerInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerInfo`.
     * @returns {SignerInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SignerInfo]: SignerInfo[_K] }
    ): SignerInfo {
        return new SignerInfo(
            _o.version,
            _o.signerIdentifier,
            _o.digestAlgorithm,
            _o.authenticatedAttributes,
            _o.digestEncryptionAlgorithm,
            _o.encryptedDigest,
            _o.unauthenticatedAttributes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignerInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignerInfo */
/**
 * @summary The Leading Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signerIdentifier",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authenticatedAttributes",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedDigest",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unauthenticatedAttributes",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignerInfo */
/**
 * @summary The Trailing Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignerInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignerInfo */
/**
 * @summary The Extension Addition Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignerInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfo */
let _cached_decoder_for_SignerInfo: $.ASN1Decoder<SignerInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SignerInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfo} The decoded data structure.
 */
export function _decode_SignerInfo(el: _Element) {
    if (!_cached_decoder_for_SignerInfo) {
        _cached_decoder_for_SignerInfo = function (el: _Element): SignerInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let signerIdentifier!: SignerIdentifier;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let authenticatedAttributes: OPTIONAL<Attributes>;
            let digestEncryptionAlgorithm!: DigestEncryptionAlgorithmIdentifier;
            let encryptedDigest!: EncryptedDigest;
            let unauthenticatedAttributes: OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                signerIdentifier: (_el: _Element): void => {
                    signerIdentifier = _decode_SignerIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
                },
                authenticatedAttributes: (_el: _Element): void => {
                    authenticatedAttributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
                digestEncryptionAlgorithm: (_el: _Element): void => {
                    digestEncryptionAlgorithm = _decode_DigestEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedDigest: (_el: _Element): void => {
                    encryptedDigest = _decode_EncryptedDigest(_el);
                },
                unauthenticatedAttributes: (_el: _Element): void => {
                    unauthenticatedAttributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignerInfo,
                _extension_additions_list_spec_for_SignerInfo,
                _root_component_type_list_2_spec_for_SignerInfo,
                undefined
            );
            return new SignerInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                signerIdentifier,
                digestAlgorithm,
                authenticatedAttributes,
                digestEncryptionAlgorithm,
                encryptedDigest,
                unauthenticatedAttributes
            );
        };
    }
    return _cached_decoder_for_SignerInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfo */
let _cached_encoder_for_SignerInfo: $.ASN1Encoder<SignerInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SignerInfo */
/**
 * @summary Encodes a(n) SignerInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfo, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfo(
    value: SignerInfo,
    elGetter: $.ASN1Encoder<SignerInfo>
) {
    if (!_cached_encoder_for_SignerInfo) {
        _cached_encoder_for_SignerInfo = function (
            value: SignerInfo,
            elGetter: $.ASN1Encoder<SignerInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_SignerIdentifier(
                            value.signerIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.authenticatedAttributes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.authenticatedAttributes, $.BER),
                        /* REQUIRED   */ _encode_DigestEncryptionAlgorithmIdentifier(
                            value.digestEncryptionAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedDigest(
                            value.encryptedDigest,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unauthenticatedAttributes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.unauthenticatedAttributes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerInfo */

/* eslint-enable */
