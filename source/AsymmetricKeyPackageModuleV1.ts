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
import { AlgorithmIdentifier } from "./AlgorithmInformation-2009";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "./CryptographicMessageSyntax-2009";
import * as __utils from "./__utils";
export {
    ALGORITHM,
    AlgorithmIdentifier,
    CONTENT_ENCRYPTION,
    PUBLIC_KEY,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier,
} from "./AlgorithmInformation-2009";
export {
    Attribute,
    CONTENT_TYPE,
    _decode_Attribute,
    _encode_Attribute,
} from "./CryptographicMessageSyntax-2009";
export { ATTRIBUTE } from "./PKIX-CommonTypes-2009";

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
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const v2: Version = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Version = __utils._decodeInteger;
export const _encode_Version = __utils._encodeInteger;

export type PrivateKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_PrivateKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_PrivateKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export type PrivateKey = asn1.OCTET_STRING; // OctetStringType
export const _decode_PrivateKey = __utils._decodeOctetString;
export const _encode_PrivateKey = __utils._encodeOctetString;

export type Attributes = Attribute[]; // SetOfType
export const _decode_Attributes = __utils._decodeSetOf<Attribute>(
    () => _decode_Attribute
);
export const _encode_Attributes = __utils._encodeSetOf<Attribute>(
    () => _encode_Attribute,
    __utils.BER
);

export type PublicKey = asn1.BIT_STRING;
export const _decode_PublicKey = __utils._decodeBitString;
export const _encode_PublicKey = __utils._encodeBitString;

export class OneAsymmetricKey {
    constructor(
        readonly version: Version,
        readonly privateKeyAlgorithm: PrivateKeyAlgorithmIdentifier,
        readonly privateKey: PrivateKey,
        readonly attributes: Attributes | undefined,
        readonly publicKey: PublicKey | undefined,
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

export const _decode_OneAsymmetricKey = function (
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
            privateKeyAlgorithm = _decode_PrivateKeyAlgorithmIdentifier(_el);
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
export const _encode_OneAsymmetricKey = function (
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

export type AsymmetricKeyPackage = OneAsymmetricKey[]; // SequenceOfType
export const _decode_AsymmetricKeyPackage = __utils._decodeSequenceOf<
    OneAsymmetricKey
>(() => _decode_OneAsymmetricKey);
export const _encode_AsymmetricKeyPackage = __utils._encodeSequenceOf<
    OneAsymmetricKey
>(() => _encode_OneAsymmetricKey, __utils.BER);

export type PrivateKeyInfo = OneAsymmetricKey; // DefinedType
export const _decode_PrivateKeyInfo = _decode_OneAsymmetricKey;
export const _encode_PrivateKeyInfo = _encode_OneAsymmetricKey;

// TODO: ObjectSetAssignment: OneAsymmetricKeyAttributes

export type EncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_EncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_EncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export type EncryptedData = asn1.OCTET_STRING; // OctetStringType
export const _decode_EncryptedData = __utils._decodeOctetString;
export const _encode_EncryptedData = __utils._encodeOctetString;

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

export const _decode_EncryptedPrivateKeyInfo = function (
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
    encryptionAlgorithm = _decode_EncryptionAlgorithmIdentifier(sequence[0]);
    encryptedData = _decode_EncryptedData(sequence[1]);
    // TODO: Validate values.
    return new EncryptedPrivateKeyInfo(encryptionAlgorithm, encryptedData);
};
export const _encode_EncryptedPrivateKeyInfo = function (
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

// TODO: ObjectSetAssignment: PrivateKeyAlgorithms

// TODO: ObjectSetAssignment: KeyEncryptionAlgorithms

/* END_MODULE AsymmetricKeyPackageModuleV1 */
