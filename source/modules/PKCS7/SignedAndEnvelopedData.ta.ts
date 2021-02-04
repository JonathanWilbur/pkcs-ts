/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateRevocationLists,
    _decode_CertificateRevocationLists,
    _encode_CertificateRevocationLists,
} from "../PKCS7/CertificateRevocationLists.ta";
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "../PKCS7/CertificateSet.ta";
import {
    DigestAlgorithmIdentifiers,
    _decode_DigestAlgorithmIdentifiers,
    _encode_DigestAlgorithmIdentifiers,
} from "../PKCS7/DigestAlgorithmIdentifiers.ta";
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../PKCS7/EncryptedContentInfo.ta";
import {
    KeyTransportRecipientInfo,
    _decode_KeyTransportRecipientInfo,
    _encode_KeyTransportRecipientInfo,
} from "../PKCS7/KeyTransportRecipientInfo.ta";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../PKCS7/SignerInfo.ta";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";
export {
    CertificateRevocationLists,
    _decode_CertificateRevocationLists,
    _encode_CertificateRevocationLists,
} from "../PKCS7/CertificateRevocationLists.ta";
export {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "../PKCS7/CertificateSet.ta";
export {
    DigestAlgorithmIdentifiers,
    _decode_DigestAlgorithmIdentifiers,
    _encode_DigestAlgorithmIdentifiers,
} from "../PKCS7/DigestAlgorithmIdentifiers.ta";
export {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../PKCS7/EncryptedContentInfo.ta";
export {
    KeyTransportRecipientInfo,
    _decode_KeyTransportRecipientInfo,
    _encode_KeyTransportRecipientInfo,
} from "../PKCS7/KeyTransportRecipientInfo.ta";
export {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../PKCS7/SignerInfo.ta";
export { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";

/* START_OF_SYMBOL_DEFINITION SignedAndEnvelopedData */
/**
 * @summary SignedAndEnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAndEnvelopedData ::= SEQUENCE {
 *     version               Version,
 *     recipientInfos        SET SIZE (1..MAX) OF KeyTransportRecipientInfo,
 *     digestAlgorithms      DigestAlgorithmIdentifiers,
 *     encryptedContentInfo  EncryptedContentInfo,
 *     certificates          [0]  CertificateSet OPTIONAL,
 *     crls                  [1]  CertificateRevocationLists OPTIONAL,
 *     signerInfos
 *         SET SIZE (1..MAX) OF
 *         SignerInfo
 *             (WITH COMPONENTS {
 *             ...,
 *             signerIdentifier           (WITH COMPONENTS {
 *                                             issuerAndSerialNumber  PRESENT
 *                                         }),
 *             authenticatedAttributes    ABSENT,
 *             unauthenticatedAttributes  ABSENT
 *             })
 * }
 * ```
 *
 * @class
 */
export class SignedAndEnvelopedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: KeyTransportRecipientInfo[],
        /**
         * @summary `digestAlgorithms`.
         * @public
         * @readonly
         */
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary `certificates`.
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<CertificateRevocationLists>,
        /**
         * @summary `signerInfos`.
         * @public
         * @readonly
         */
        readonly signerInfos: SignerInfo[]
    ) {}

    /**
     * @summary Restructures an object into a SignedAndEnvelopedData
     * @description
     *
     * This takes an `object` and converts it to a `SignedAndEnvelopedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedAndEnvelopedData`.
     * @returns {SignedAndEnvelopedData}
     */
    public static _from_object(
        _o: { [_K in keyof SignedAndEnvelopedData]: SignedAndEnvelopedData[_K] }
    ): SignedAndEnvelopedData {
        return new SignedAndEnvelopedData(
            _o.version,
            _o.recipientInfos,
            _o.digestAlgorithms,
            _o.encryptedContentInfo,
            _o.certificates,
            _o.crls,
            _o.signerInfos
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedAndEnvelopedData */
/**
 * @summary The Leading Root Component Types of SignedAndEnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedAndEnvelopedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
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
        "digestAlgorithms",
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
        "certificates",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crls",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signerInfos",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedAndEnvelopedData */
/**
 * @summary The Trailing Root Component Types of SignedAndEnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedAndEnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedAndEnvelopedData */
/**
 * @summary The Extension Addition Component Types of SignedAndEnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedAndEnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedAndEnvelopedData */
let _cached_decoder_for_SignedAndEnvelopedData: $.ASN1Decoder<SignedAndEnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _decode_SignedAndEnvelopedData */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedAndEnvelopedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAndEnvelopedData} The decoded data structure.
 */
export function _decode_SignedAndEnvelopedData(el: _Element) {
    if (!_cached_decoder_for_SignedAndEnvelopedData) {
        _cached_decoder_for_SignedAndEnvelopedData = function (
            el: _Element
        ): SignedAndEnvelopedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let recipientInfos!: KeyTransportRecipientInfo[];
            let digestAlgorithms!: DigestAlgorithmIdentifiers;
            let encryptedContentInfo!: EncryptedContentInfo;
            let certificates: OPTIONAL<CertificateSet>;
            let crls: OPTIONAL<CertificateRevocationLists>;
            let signerInfos!: SignerInfo[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                recipientInfos: (_el: _Element): void => {
                    recipientInfos = $._decodeSetOf<KeyTransportRecipientInfo>(
                        () => _decode_KeyTransportRecipientInfo
                    )(_el);
                },
                digestAlgorithms: (_el: _Element): void => {
                    digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
                },
                encryptedContentInfo: (_el: _Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                certificates: (_el: _Element): void => {
                    certificates = $._decode_implicit<CertificateSet>(
                        () => _decode_CertificateSet
                    )(_el);
                },
                crls: (_el: _Element): void => {
                    crls = $._decode_implicit<CertificateRevocationLists>(
                        () => _decode_CertificateRevocationLists
                    )(_el);
                },
                signerInfos: (_el: _Element): void => {
                    signerInfos = $._decodeSetOf<SignerInfo>(
                        () => _decode_SignerInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedAndEnvelopedData,
                _extension_additions_list_spec_for_SignedAndEnvelopedData,
                _root_component_type_list_2_spec_for_SignedAndEnvelopedData,
                undefined
            );
            return new SignedAndEnvelopedData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                recipientInfos,
                digestAlgorithms,
                encryptedContentInfo,
                certificates,
                crls,
                signerInfos
            );
        };
    }
    return _cached_decoder_for_SignedAndEnvelopedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedAndEnvelopedData */
let _cached_encoder_for_SignedAndEnvelopedData: $.ASN1Encoder<SignedAndEnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedAndEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _encode_SignedAndEnvelopedData */
/**
 * @summary Encodes a(n) SignedAndEnvelopedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedAndEnvelopedData, encoded as an ASN.1 Element.
 */
export function _encode_SignedAndEnvelopedData(
    value: SignedAndEnvelopedData,
    elGetter: $.ASN1Encoder<SignedAndEnvelopedData>
) {
    if (!_cached_encoder_for_SignedAndEnvelopedData) {
        _cached_encoder_for_SignedAndEnvelopedData = function (
            value: SignedAndEnvelopedData,
            elGetter: $.ASN1Encoder<SignedAndEnvelopedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ $._encodeSetOf<KeyTransportRecipientInfo>(
                            () => _encode_KeyTransportRecipientInfo,
                            $.BER
                        )(value.recipientInfos, $.BER),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                            value.digestAlgorithms,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  $.BER
                              )(value.certificates, $.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  $.BER
                              )(value.crls, $.BER),
                        /* REQUIRED   */ $._encodeSetOf<SignerInfo>(
                            () => _encode_SignerInfo,
                            $.BER
                        )(value.signerInfos, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignedAndEnvelopedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedAndEnvelopedData */

/* eslint-enable */
