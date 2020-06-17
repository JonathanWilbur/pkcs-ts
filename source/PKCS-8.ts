/*
    BEGIN_MODULE AsymmetricKeyPackageModuleV1
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.id-mod-asymmetricKeyPkgV1
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "x500-ts/dist/node/InformationFramework";
import * as __utils from "./__utils";

// TODO: ObjectSetAssignment: ContentSet

// TODO: ObjectAssignment: ct-asymmetric-key-package

export const id_ct_KP_aKeyPackage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-itu-t */ 2,
        /* country */ 16,
        /* us */ 840,
        /* organization */ 1,
        /* gov */ 101,
        /* dod */ 2,
        /* infosec */ 1,
        /* formats */ 2,
        /* key-package-content-types */ 78,
        5,
    ]
);

export type Version = asn1.INTEGER;
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Version: __utils.ASN1Decoder<Version> | null = null;
let _cached_encoder_for_Version: __utils.ASN1Encoder<Version> | null = null;
export function _decode_Version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Version) {
        _cached_decoder_for_Version = __utils._decodeInteger;
    }
    return _cached_decoder_for_Version(el);
}
export function _encode_Version(
    value: Version,
    elGetter: __utils.ASN1Encoder<Version>
) {
    if (!_cached_encoder_for_Version) {
        _cached_encoder_for_Version = __utils._encodeInteger;
    }
    return _cached_encoder_for_Version(value, elGetter);
}

export type PrivateKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_PrivateKeyAlgorithmIdentifier: __utils.ASN1Decoder<
    PrivateKeyAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_PrivateKeyAlgorithmIdentifier: __utils.ASN1Encoder<
    PrivateKeyAlgorithmIdentifier
> | null = null;
export function _decode_PrivateKeyAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateKeyAlgorithmIdentifier) {
        _cached_decoder_for_PrivateKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PrivateKeyAlgorithmIdentifier(el);
}
export function _encode_PrivateKeyAlgorithmIdentifier(
    value: PrivateKeyAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<PrivateKeyAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_PrivateKeyAlgorithmIdentifier) {
        _cached_encoder_for_PrivateKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PrivateKeyAlgorithmIdentifier(value, elGetter);
}

export type PrivateKey = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_PrivateKey: __utils.ASN1Decoder<
    PrivateKey
> | null = null;
let _cached_encoder_for_PrivateKey: __utils.ASN1Encoder<
    PrivateKey
> | null = null;
export function _decode_PrivateKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateKey) {
        _cached_decoder_for_PrivateKey = __utils._decodeOctetString;
    }
    return _cached_decoder_for_PrivateKey(el);
}
export function _encode_PrivateKey(
    value: PrivateKey,
    elGetter: __utils.ASN1Encoder<PrivateKey>
) {
    if (!_cached_encoder_for_PrivateKey) {
        _cached_encoder_for_PrivateKey = __utils._encodeOctetString;
    }
    return _cached_encoder_for_PrivateKey(value, elGetter);
}

export type Attributes = Attribute[]; // SetOfType
let _cached_decoder_for_Attributes: __utils.ASN1Decoder<
    Attributes
> | null = null;
let _cached_encoder_for_Attributes: __utils.ASN1Encoder<
    Attributes
> | null = null;
export function _decode_Attributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Attributes) {
        _cached_decoder_for_Attributes = __utils._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Attributes(el);
}
export function _encode_Attributes(
    value: Attributes,
    elGetter: __utils.ASN1Encoder<Attributes>
) {
    if (!_cached_encoder_for_Attributes) {
        _cached_encoder_for_Attributes = __utils._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            __utils.BER
        );
    }
    return _cached_encoder_for_Attributes(value, elGetter);
}

export type PublicKey = asn1.BIT_STRING;
let _cached_decoder_for_PublicKey: __utils.ASN1Decoder<PublicKey> | null = null;
let _cached_encoder_for_PublicKey: __utils.ASN1Encoder<PublicKey> | null = null;
export function _decode_PublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PublicKey) {
        _cached_decoder_for_PublicKey = __utils._decodeBitString;
    }
    return _cached_decoder_for_PublicKey(el);
}
export function _encode_PublicKey(
    value: PublicKey,
    elGetter: __utils.ASN1Encoder<PublicKey>
) {
    if (!_cached_encoder_for_PublicKey) {
        _cached_encoder_for_PublicKey = __utils._encodeBitString;
    }
    return _cached_encoder_for_PublicKey(value, elGetter);
}

export class OneAsymmetricKey {
    constructor(
        readonly version: Version,
        readonly privateKeyAlgorithm: PrivateKeyAlgorithmIdentifier,
        readonly privateKey: PrivateKey,
        readonly attributes: asn1.OPTIONAL<Attributes>,
        readonly publicKey: asn1.OPTIONAL<PublicKey>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_OneAsymmetricKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateKeyAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OneAsymmetricKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OneAsymmetricKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "publicKey",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        0,
        2
    ),
];
let _cached_decoder_for_OneAsymmetricKey: __utils.ASN1Decoder<
    OneAsymmetricKey
> | null = null;
let _cached_encoder_for_OneAsymmetricKey: __utils.ASN1Encoder<
    OneAsymmetricKey
> | null = null;
export function _decode_OneAsymmetricKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OneAsymmetricKey) {
        _cached_decoder_for_OneAsymmetricKey = function (
            el: asn1.ASN1Element
        ): OneAsymmetricKey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let privateKeyAlgorithm!: PrivateKeyAlgorithmIdentifier;
            let privateKey!: PrivateKey;
            let attributes: asn1.OPTIONAL<Attributes>;
            let publicKey: asn1.OPTIONAL<PublicKey>; // Only present in version 2 and higher.
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                privateKeyAlgorithm: (_el: asn1.ASN1Element): void => {
                    privateKeyAlgorithm = _decode_PrivateKeyAlgorithmIdentifier(
                        _el
                    );
                },
                privateKey: (_el: asn1.ASN1Element): void => {
                    privateKey = _decode_PrivateKey(_el);
                },
                attributes: (_el: asn1.ASN1Element): void => {
                    attributes = __utils._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
                publicKey: (_el: asn1.ASN1Element): void => {
                    publicKey = __utils._decode_implicit<PublicKey>(
                        () => _decode_PublicKey
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OneAsymmetricKey,
                _extension_additions_list_spec_for_OneAsymmetricKey,
                _root_component_type_list_2_spec_for_OneAsymmetricKey,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new OneAsymmetricKey /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                privateKeyAlgorithm,
                privateKey,
                attributes,
                publicKey,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_OneAsymmetricKey(el);
}
export function _encode_OneAsymmetricKey(
    value: OneAsymmetricKey,
    elGetter: __utils.ASN1Encoder<OneAsymmetricKey>
) {
    if (!_cached_encoder_for_OneAsymmetricKey) {
        _cached_encoder_for_OneAsymmetricKey = function (
            value: OneAsymmetricKey,
            elGetter: __utils.ASN1Encoder<OneAsymmetricKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Version(
                                value.version,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_PrivateKeyAlgorithmIdentifier(
                                value.privateKeyAlgorithm,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_PrivateKey(
                                value.privateKey,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.attributes === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_Attributes,
                                      __utils.BER
                                  )(value.attributes, __utils.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.publicKey === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_PublicKey,
                                      __utils.BER
                                  )(value.publicKey, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OneAsymmetricKey(value, elGetter);
}

export type AsymmetricKeyPackage = OneAsymmetricKey[]; // SequenceOfType
let _cached_decoder_for_AsymmetricKeyPackage: __utils.ASN1Decoder<
    AsymmetricKeyPackage
> | null = null;
let _cached_encoder_for_AsymmetricKeyPackage: __utils.ASN1Encoder<
    AsymmetricKeyPackage
> | null = null;
export function _decode_AsymmetricKeyPackage(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AsymmetricKeyPackage) {
        _cached_decoder_for_AsymmetricKeyPackage = __utils._decodeSequenceOf<
            OneAsymmetricKey
        >(() => _decode_OneAsymmetricKey);
    }
    return _cached_decoder_for_AsymmetricKeyPackage(el);
}
export function _encode_AsymmetricKeyPackage(
    value: AsymmetricKeyPackage,
    elGetter: __utils.ASN1Encoder<AsymmetricKeyPackage>
) {
    if (!_cached_encoder_for_AsymmetricKeyPackage) {
        _cached_encoder_for_AsymmetricKeyPackage = __utils._encodeSequenceOf<
            OneAsymmetricKey
        >(() => _encode_OneAsymmetricKey, __utils.BER);
    }
    return _cached_encoder_for_AsymmetricKeyPackage(value, elGetter);
}

export type PrivateKeyInfo = OneAsymmetricKey; // DefinedType
let _cached_decoder_for_PrivateKeyInfo: __utils.ASN1Decoder<
    PrivateKeyInfo
> | null = null;
let _cached_encoder_for_PrivateKeyInfo: __utils.ASN1Encoder<
    PrivateKeyInfo
> | null = null;
export function _decode_PrivateKeyInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateKeyInfo) {
        _cached_decoder_for_PrivateKeyInfo = _decode_OneAsymmetricKey;
    }
    return _cached_decoder_for_PrivateKeyInfo(el);
}
export function _encode_PrivateKeyInfo(
    value: PrivateKeyInfo,
    elGetter: __utils.ASN1Encoder<PrivateKeyInfo>
) {
    if (!_cached_encoder_for_PrivateKeyInfo) {
        _cached_encoder_for_PrivateKeyInfo = _encode_OneAsymmetricKey;
    }
    return _cached_encoder_for_PrivateKeyInfo(value, elGetter);
}

// TODO: ObjectSetAssignment: OneAsymmetricKeyAttributes

export type EncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_EncryptionAlgorithmIdentifier: __utils.ASN1Decoder<
    EncryptionAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_EncryptionAlgorithmIdentifier: __utils.ASN1Encoder<
    EncryptionAlgorithmIdentifier
> | null = null;
export function _decode_EncryptionAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptionAlgorithmIdentifier) {
        _cached_decoder_for_EncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_EncryptionAlgorithmIdentifier(el);
}
export function _encode_EncryptionAlgorithmIdentifier(
    value: EncryptionAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<EncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_EncryptionAlgorithmIdentifier) {
        _cached_encoder_for_EncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_EncryptionAlgorithmIdentifier(value, elGetter);
}

export type EncryptedData = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedData: __utils.ASN1Decoder<
    EncryptedData
> | null = null;
let _cached_encoder_for_EncryptedData: __utils.ASN1Encoder<
    EncryptedData
> | null = null;
export function _decode_EncryptedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedData) {
        _cached_decoder_for_EncryptedData = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedData(el);
}
export function _encode_EncryptedData(
    value: EncryptedData,
    elGetter: __utils.ASN1Encoder<EncryptedData>
) {
    if (!_cached_encoder_for_EncryptedData) {
        _cached_encoder_for_EncryptedData = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedData(value, elGetter);
}

export class EncryptedPrivateKeyInfo {
    constructor(
        readonly encryptionAlgorithm: EncryptionAlgorithmIdentifier,
        readonly encryptedData: EncryptedData
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedPrivateKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "encryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedData",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedPrivateKeyInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedPrivateKeyInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedPrivateKeyInfo: __utils.ASN1Decoder<
    EncryptedPrivateKeyInfo
> | null = null;
let _cached_encoder_for_EncryptedPrivateKeyInfo: __utils.ASN1Encoder<
    EncryptedPrivateKeyInfo
> | null = null;
export function _decode_EncryptedPrivateKeyInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedPrivateKeyInfo) {
        _cached_decoder_for_EncryptedPrivateKeyInfo = function (
            el: asn1.ASN1Element
        ): EncryptedPrivateKeyInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "EncryptedPrivateKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "encryptionAlgorithm";
            sequence[1].name = "encryptedData";
            let encryptionAlgorithm!: EncryptionAlgorithmIdentifier;
            let encryptedData!: EncryptedData;
            encryptionAlgorithm = _decode_EncryptionAlgorithmIdentifier(
                sequence[0]
            );
            encryptedData = _decode_EncryptedData(sequence[1]);
            // TODO: Validate values.
            return new EncryptedPrivateKeyInfo(
                encryptionAlgorithm,
                encryptedData
            );
        };
    }
    return _cached_decoder_for_EncryptedPrivateKeyInfo(el);
}
export function _encode_EncryptedPrivateKeyInfo(
    value: EncryptedPrivateKeyInfo,
    elGetter: __utils.ASN1Encoder<EncryptedPrivateKeyInfo>
) {
    if (!_cached_encoder_for_EncryptedPrivateKeyInfo) {
        _cached_encoder_for_EncryptedPrivateKeyInfo = function (
            value: EncryptedPrivateKeyInfo,
            elGetter: __utils.ASN1Encoder<EncryptedPrivateKeyInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncryptionAlgorithmIdentifier(
                            value.encryptionAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedData(
                            value.encryptedData,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedPrivateKeyInfo(value, elGetter);
}

// TODO: ObjectSetAssignment: PrivateKeyAlgorithms

// TODO: ObjectSetAssignment: KeyEncryptionAlgorithms

/* END_MODULE AsymmetricKeyPackageModuleV1 */
