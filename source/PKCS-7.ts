/*
    BEGIN_MODULE PKCS7
    OID: iso.member-body.usa.rsadsi.pkcs.7.module
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    AttributeCertificate,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_AlgorithmIdentifier,
    _decode_AttributeCertificate,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_AlgorithmIdentifier,
    _encode_AttributeCertificate,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
import {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
import * as __utils from "./__utils";
import { iso } from "./__utils";
export {
    AlgorithmIdentifier,
    AttributeCertificate,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_AlgorithmIdentifier,
    _decode_AttributeCertificate,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_AlgorithmIdentifier,
    _encode_AttributeCertificate,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
export {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";

// TODO: ObjectSetAssignment: PKCS7ContentTable

// TODO: ObjectClassAssignment: PKCS7-CONTENT-TYPE

// TODO: ObjectAssignment: data

export type Data = asn1.OCTET_STRING; // OctetStringType
export const _decode_Data = __utils._decodeOctetString;
export const _encode_Data = __utils._encodeOctetString;

// TODO: ObjectAssignment: signed-data

export type Version = asn1.INTEGER;
export const _decode_Version = __utils._decodeInteger;
export const _encode_Version = __utils._encodeInteger;

export type DigestAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_DigestAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_DigestAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export type DigestAlgorithmIdentifiers = DigestAlgorithmIdentifier[]; // SetOfType
export const _decode_DigestAlgorithmIdentifiers = __utils._decodeSetOf<
    DigestAlgorithmIdentifier
>(() => _decode_DigestAlgorithmIdentifier);
export const _encode_DigestAlgorithmIdentifiers = __utils._encodeSetOf<
    DigestAlgorithmIdentifier
>(() => _encode_DigestAlgorithmIdentifier, __utils.BER);

export class ContentInfo {
    constructor(
        readonly content_type: asn1.OBJECT_IDENTIFIER,
        readonly pkcs7_content: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "content-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pkcs7-content",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContentInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContentInfo: __utils.ComponentSpec[] = [];

export const _decode_ContentInfo = function (
    el: asn1.ASN1Element
): ContentInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "ContentInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "content-type";
    sequence[1].name = "pkcs7-content";
    let content_type!: asn1.OBJECT_IDENTIFIER;
    let pkcs7_content!: asn1.ASN1Element;
    content_type = __utils._decodeObjectIdentifier(sequence[0]);
    pkcs7_content = __utils._decode_implicit<asn1.ASN1Element>(
        () => __utils._decodeAny
    )(sequence[1]);
    // TODO: Validate values.
    return new ContentInfo(content_type, pkcs7_content);
};
export const _encode_ContentInfo = function (
    value: ContentInfo,
    elGetter: __utils.ASN1Encoder<ContentInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.content_type,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.pkcs7_content, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type Attributes = Attribute[]; // SetOfType
export const _decode_Attributes = __utils._decodeSetOf<Attribute>(
    () => _decode_Attribute
);
export const _encode_Attributes = __utils._encodeSetOf<Attribute>(
    () => _encode_Attribute,
    __utils.BER
);

export class ExtendedCertificateInfo {
    constructor(
        readonly version: Version,
        readonly certificate: Certificate,
        readonly attributes: Attributes
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtendedCertificateInfo: __utils.ComponentSpec[] = [];

export const _decode_ExtendedCertificateInfo = function (
    el: asn1.ASN1Element
): ExtendedCertificateInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "ExtendedCertificateInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "certificate";
    sequence[2].name = "attributes";
    let version!: Version;
    let certificate!: Certificate;
    let attributes!: Attributes;
    version = _decode_Version(sequence[0]);
    certificate = _decode_Certificate(sequence[1]);
    attributes = _decode_Attributes(sequence[2]);
    // TODO: Validate values.
    return new ExtendedCertificateInfo(version, certificate, attributes);
};
export const _encode_ExtendedCertificateInfo = function (
    value: ExtendedCertificateInfo,
    elGetter: __utils.ASN1Encoder<ExtendedCertificateInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_Certificate(
                    value.certificate,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_Attributes(
                    value.attributes,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type ExtendedCertificate = SIGNED<ExtendedCertificateInfo>; // DefinedType
export const _decode_ExtendedCertificate = _get_decoder_for_SIGNED<
    ExtendedCertificateInfo
>(_decode_ExtendedCertificateInfo);
export const _encode_ExtendedCertificate = _get_encoder_for_SIGNED<
    ExtendedCertificateInfo
>(_encode_ExtendedCertificateInfo);

export type CertificateChoice =
    | { certificate: Certificate }
    | { extendedCertificate: ExtendedCertificate }
    | { attributeCertificate: AttributeCertificate };
export const _decode_CertificateChoice = __utils._decode_inextensible_choice<
    CertificateChoice
>({
    "UNIVERSAL 16": ["certificate", _decode_Certificate],
    "CONTEXT 0": [
        "extendedCertificate",
        __utils._decode_implicit<ExtendedCertificate>(
            () => _decode_ExtendedCertificate
        ),
    ],
    "CONTEXT 1": [
        "attributeCertificate",
        __utils._decode_implicit<AttributeCertificate>(
            () => _decode_AttributeCertificate
        ),
    ],
});
export const _encode_CertificateChoice = __utils._encode_choice<
    CertificateChoice
>(
    {
        certificate: _encode_Certificate,
        extendedCertificate: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_ExtendedCertificate,
            __utils.BER
        ),
        attributeCertificate: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_AttributeCertificate,
            __utils.BER
        ),
    },
    __utils.BER
);

export type CertificateSet = CertificateChoice[]; // SetOfType
export const _decode_CertificateSet = __utils._decodeSetOf<CertificateChoice>(
    () => _decode_CertificateChoice
);
export const _encode_CertificateSet = __utils._encodeSetOf<CertificateChoice>(
    () => _encode_CertificateChoice,
    __utils.BER
);

export type CertificateRevocationLists = CertificateList[]; // SetOfType
export const _decode_CertificateRevocationLists = __utils._decodeSetOf<
    CertificateList
>(() => _decode_CertificateList);
export const _encode_CertificateRevocationLists = __utils._encodeSetOf<
    CertificateList
>(() => _encode_CertificateList, __utils.BER);

export class IssuerAndSerialNumber {
    constructor(
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [];

export const _decode_IssuerAndSerialNumber = function (
    el: asn1.ASN1Element
): IssuerAndSerialNumber {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "IssuerAndSerialNumber contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "serialNumber";
    let issuer!: Name;
    let serialNumber!: CertificateSerialNumber;
    issuer = _decode_Name(sequence[0]);
    serialNumber = _decode_CertificateSerialNumber(sequence[1]);
    // TODO: Validate values.
    return new IssuerAndSerialNumber(issuer, serialNumber);
};
export const _encode_IssuerAndSerialNumber = function (
    value: IssuerAndSerialNumber,
    elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
                /* REQUIRED   */ _encode_CertificateSerialNumber(
                    value.serialNumber,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type SubjectKeyIdentifier = asn1.OCTET_STRING; // OctetStringType
export const _decode_SubjectKeyIdentifier = __utils._decodeOctetString;
export const _encode_SubjectKeyIdentifier = __utils._encodeOctetString;

export type SignerIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber }
    | { subjectKeyIdentifier: SubjectKeyIdentifier };
export const _decode_SignerIdentifier = __utils._decode_inextensible_choice<
    SignerIdentifier
>({
    "UNIVERSAL 16": ["issuerAndSerialNumber", _decode_IssuerAndSerialNumber],
    "CONTEXT 2": [
        "subjectKeyIdentifier",
        __utils._decode_implicit<SubjectKeyIdentifier>(
            () => _decode_SubjectKeyIdentifier
        ),
    ],
});
export const _encode_SignerIdentifier = __utils._encode_choice<
    SignerIdentifier
>(
    {
        issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
        subjectKeyIdentifier: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            2,
            () => _encode_SubjectKeyIdentifier,
            __utils.BER
        ),
    },
    __utils.BER
);

export type DigestEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_DigestEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_DigestEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export type ENCRYPTED = asn1.OCTET_STRING; // OctetStringType
export const _get_decoder_for_ENCRYPTED = function <ToBeEnciphered>(
    _decode_ToBeEnciphered: __utils.ASN1Decoder<ToBeEnciphered>
) {
    return __utils._decodeOctetString;
};
export const _get_encoder_for_ENCRYPTED = function <ToBeEnciphered>(
    _encode_ToBeEnciphered: __utils.ASN1Encoder<ToBeEnciphered>
) {
    return __utils._encodeOctetString;
};

export type Digest = HASH<
    { content: asn1.ASN1Element } | { authenticated_attributes: Attributes }
>; // DefinedType
export const _decode_Digest = _get_decoder_for_HASH<
    { content: asn1.ASN1Element } | { authenticated_attributes: Attributes }
>(
    __utils._decode_inextensible_choice<HASH>({
        "CONTEXT 1": [
            "content",
            __utils._decode_implicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            ),
        ],
        "CONTEXT 0": [
            "authenticated_attributes",
            __utils._decode_explicit<Attributes>(() => _decode_Attributes),
        ],
    })
);
export const _encode_Digest = _get_encoder_for_HASH<
    { content: asn1.ASN1Element } | { authenticated_attributes: Attributes }
>(
    __utils._encode_choice<HASH>(
        {
            content: __utils._encode_implicit(
                asn1.ASN1TagClass.context,
                1,
                () => __utils._encodeAny,
                __utils.BER
            ),
            authenticated_attributes: __utils._encode_explicit(
                asn1.ASN1TagClass.context,
                0,
                () => _encode_Attributes,
                __utils.BER
            ),
        },
        __utils.BER
    )
);

export class DigestInfo {
    constructor(
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly digest: Digest
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DigestInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DigestInfo: __utils.ComponentSpec[] = [];

export const _decode_DigestInfo = function (el: asn1.ASN1Element): DigestInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "DigestInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "digestAlgorithm";
    sequence[1].name = "digest";
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let digest!: Digest;
    digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[0]);
    digest = _decode_Digest(sequence[1]);
    // TODO: Validate values.
    return new DigestInfo(digestAlgorithm, digest);
};
export const _encode_DigestInfo = function (
    value: DigestInfo,
    elGetter: __utils.ASN1Encoder<DigestInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                    value.digestAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_Digest(value.digest, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type EncryptedDigest = ENCRYPTED<DigestInfo>; // DefinedType
export const _decode_EncryptedDigest = _get_decoder_for_ENCRYPTED<DigestInfo>(
    _decode_DigestInfo
);
export const _encode_EncryptedDigest = _get_encoder_for_ENCRYPTED<DigestInfo>(
    _encode_DigestInfo
);

export class SignerInfo {
    constructor(
        readonly version: Version,
        readonly signerIdentifier: SignerIdentifier,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly authenticatedAttributes: Attributes | undefined,
        readonly digestEncryptionAlgorithm: DigestEncryptionAlgorithmIdentifier,
        readonly encryptedDigest: EncryptedDigest,
        readonly unauthenticatedAttributes: Attributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SignerInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signerIdentifier",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedDigest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unauthenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignerInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignerInfo: __utils.ComponentSpec[] = [];

export const _decode_SignerInfo = function (el: asn1.ASN1Element): SignerInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let signerIdentifier!: SignerIdentifier;
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let authenticatedAttributes: asn1.OPTIONAL<Attributes>;
    let digestEncryptionAlgorithm!: DigestEncryptionAlgorithmIdentifier;
    let encryptedDigest!: EncryptedDigest;
    let unauthenticatedAttributes: asn1.OPTIONAL<Attributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        signerIdentifier: (_el: asn1.ASN1Element): void => {
            signerIdentifier = _decode_SignerIdentifier(_el);
        },
        digestAlgorithm: (_el: asn1.ASN1Element): void => {
            digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
        },
        authenticatedAttributes: (_el: asn1.ASN1Element): void => {
            authenticatedAttributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(_el);
        },
        digestEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
            digestEncryptionAlgorithm = _decode_DigestEncryptionAlgorithmIdentifier(
                _el
            );
        },
        encryptedDigest: (_el: asn1.ASN1Element): void => {
            encryptedDigest = _decode_EncryptedDigest(_el);
        },
        unauthenticatedAttributes: (_el: asn1.ASN1Element): void => {
            unauthenticatedAttributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SignerInfo,
        _extension_additions_list_spec_for_SignerInfo,
        _root_component_type_list_2_spec_for_SignerInfo,
        undefined
    );
    return new SignerInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        signerIdentifier,
        digestAlgorithm,
        authenticatedAttributes,
        digestEncryptionAlgorithm,
        encryptedDigest,
        unauthenticatedAttributes
    );
};
export const _encode_SignerInfo = function (
    value: SignerInfo,
    elGetter: __utils.ASN1Encoder<SignerInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_SignerIdentifier(
                    value.signerIdentifier,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                    value.digestAlgorithm,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.authenticatedAttributes === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_Attributes,
                          __utils.BER
                      )(value.authenticatedAttributes, __utils.BER),
                /* REQUIRED   */ _encode_DigestEncryptionAlgorithmIdentifier(
                    value.digestEncryptionAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EncryptedDigest(
                    value.encryptedDigest,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.unauthenticatedAttributes === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_Attributes,
                          __utils.BER
                      )(value.unauthenticatedAttributes, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type SignerInfos = SignerInfo[]; // SetOfType
export const _decode_SignerInfos = __utils._decodeSetOf<SignerInfo>(
    () => _decode_SignerInfo
);
export const _encode_SignerInfos = __utils._encodeSetOf<SignerInfo>(
    () => _encode_SignerInfo,
    __utils.BER
);

export class SignedData {
    constructor(
        readonly version: Version,
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        readonly contentInfo: ContentInfo,
        readonly certificates: CertificateSet | undefined,
        readonly crls: CertificateRevocationLists | undefined,
        readonly signerInfos: SignerInfos
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithms",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signerInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedData: __utils.ComponentSpec[] = [];

export const _decode_SignedData = function (el: asn1.ASN1Element): SignedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let digestAlgorithms!: DigestAlgorithmIdentifiers;
    let contentInfo!: ContentInfo;
    let certificates: asn1.OPTIONAL<CertificateSet>;
    let crls: asn1.OPTIONAL<CertificateRevocationLists>;
    let signerInfos!: SignerInfos;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        digestAlgorithms: (_el: asn1.ASN1Element): void => {
            digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
        },
        contentInfo: (_el: asn1.ASN1Element): void => {
            contentInfo = _decode_ContentInfo(_el);
        },
        certificates: (_el: asn1.ASN1Element): void => {
            certificates = __utils._decode_implicit<CertificateSet>(
                () => _decode_CertificateSet
            )(_el);
        },
        crls: (_el: asn1.ASN1Element): void => {
            crls = __utils._decode_implicit<CertificateRevocationLists>(
                () => _decode_CertificateRevocationLists
            )(_el);
        },
        signerInfos: (_el: asn1.ASN1Element): void => {
            signerInfos = _decode_SignerInfos(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SignedData,
        _extension_additions_list_spec_for_SignedData,
        _root_component_type_list_2_spec_for_SignedData,
        undefined
    );
    return new SignedData /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        digestAlgorithms,
        contentInfo,
        certificates,
        crls,
        signerInfos
    );
};
export const _encode_SignedData = function (
    value: SignedData,
    elGetter: __utils.ASN1Encoder<SignedData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                    value.digestAlgorithms,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_ContentInfo(
                    value.contentInfo,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.certificates === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_CertificateSet,
                          __utils.BER
                      )(value.certificates, __utils.BER),
                /* IF_ABSENT  */ value.crls === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_CertificateRevocationLists,
                          __utils.BER
                      )(value.crls, __utils.BER),
                /* REQUIRED   */ _encode_SignerInfos(
                    value.signerInfos,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: enveloped-data

export class OriginatorInfo {
    constructor(
        readonly certificates: CertificateSet | undefined,
        readonly crls: CertificateRevocationLists | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certificates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OriginatorInfo: __utils.ComponentSpec[] = [];

export const _decode_OriginatorInfo = function (
    el: asn1.ASN1Element
): OriginatorInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certificates: asn1.OPTIONAL<CertificateSet>;
    let crls: asn1.OPTIONAL<CertificateRevocationLists>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        certificates: (_el: asn1.ASN1Element): void => {
            certificates = __utils._decode_implicit<CertificateSet>(
                () => _decode_CertificateSet
            )(_el);
        },
        crls: (_el: asn1.ASN1Element): void => {
            crls = __utils._decode_implicit<CertificateRevocationLists>(
                () => _decode_CertificateRevocationLists
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_OriginatorInfo,
        _extension_additions_list_spec_for_OriginatorInfo,
        _root_component_type_list_2_spec_for_OriginatorInfo,
        undefined
    );
    return new OriginatorInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        certificates,
        crls
    );
};
export const _encode_OriginatorInfo = function (
    value: OriginatorInfo,
    elGetter: __utils.ASN1Encoder<OriginatorInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.certificates === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_CertificateSet,
                          __utils.BER
                      )(value.certificates, __utils.BER),
                /* IF_ABSENT  */ value.crls === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_CertificateRevocationLists,
                          __utils.BER
                      )(value.crls, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type RecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber }
    | { subjectKeyIdentifier: SubjectKeyIdentifier };
export const _decode_RecipientIdentifier = __utils._decode_inextensible_choice<
    RecipientIdentifier
>({
    "UNIVERSAL 16": ["issuerAndSerialNumber", _decode_IssuerAndSerialNumber],
    "CONTEXT 0": [
        "subjectKeyIdentifier",
        __utils._decode_implicit<SubjectKeyIdentifier>(
            () => _decode_SubjectKeyIdentifier
        ),
    ],
});
export const _encode_RecipientIdentifier = __utils._encode_choice<
    RecipientIdentifier
>(
    {
        issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
        subjectKeyIdentifier: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_SubjectKeyIdentifier,
            __utils.BER
        ),
    },
    __utils.BER
);

export type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_KeyEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_KeyEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export type EncryptedKey = asn1.OCTET_STRING; // OctetStringType
export const _decode_EncryptedKey = __utils._decodeOctetString;
export const _encode_EncryptedKey = __utils._encodeOctetString;

export class KeyTransportRecipientInfo {
    constructor(
        readonly version: Version,
        readonly recipientIdentifier: RecipientIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyTransportRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientIdentifier",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyTransportRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyTransportRecipientInfo: __utils.ComponentSpec[] = [];

export const _decode_KeyTransportRecipientInfo = function (
    el: asn1.ASN1Element
): KeyTransportRecipientInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError(
            "KeyTransportRecipientInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "recipientIdentifier";
    sequence[2].name = "keyEncryptionAlgorithm";
    sequence[3].name = "encryptedKey";
    let version!: Version;
    let recipientIdentifier!: RecipientIdentifier;
    let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
    let encryptedKey!: EncryptedKey;
    version = _decode_Version(sequence[0]);
    recipientIdentifier = _decode_RecipientIdentifier(sequence[1]);
    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
        sequence[2]
    );
    encryptedKey = _decode_EncryptedKey(sequence[3]);
    // TODO: Validate values.
    return new KeyTransportRecipientInfo(
        version,
        recipientIdentifier,
        keyEncryptionAlgorithm,
        encryptedKey
    );
};
export const _encode_KeyTransportRecipientInfo = function (
    value: KeyTransportRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyTransportRecipientInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_RecipientIdentifier(
                    value.recipientIdentifier,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                    value.keyEncryptionAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EncryptedKey(
                    value.encryptedKey,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class OriginatorPublicKey {
    constructor(
        readonly algorithm: AlgorithmIdentifier,
        readonly publicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OriginatorPublicKey: __utils.ComponentSpec[] = [];

export const _decode_OriginatorPublicKey = function (
    el: asn1.ASN1Element
): OriginatorPublicKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "OriginatorPublicKey contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "publicKey";
    let algorithm!: AlgorithmIdentifier;
    let publicKey!: asn1.BIT_STRING;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    publicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new OriginatorPublicKey(algorithm, publicKey);
};
export const _encode_OriginatorPublicKey = function (
    value: OriginatorPublicKey,
    elGetter: __utils.ASN1Encoder<OriginatorPublicKey>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.algorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeBitString(
                    value.publicKey,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type OriginatorIdentifierOrKey =
    | { issuerAndSerialNumber: IssuerAndSerialNumber }
    | { subjectKeyIdentifier: SubjectKeyIdentifier }
    | { originatorPublicKey: OriginatorPublicKey };
export const _decode_OriginatorIdentifierOrKey = __utils._decode_inextensible_choice<
    OriginatorIdentifierOrKey
>({
    "UNIVERSAL 16": ["issuerAndSerialNumber", _decode_IssuerAndSerialNumber],
    "CONTEXT 0": [
        "subjectKeyIdentifier",
        __utils._decode_implicit<SubjectKeyIdentifier>(
            () => _decode_SubjectKeyIdentifier
        ),
    ],
    "CONTEXT 1": [
        "originatorPublicKey",
        __utils._decode_implicit<OriginatorPublicKey>(
            () => _decode_OriginatorPublicKey
        ),
    ],
});
export const _encode_OriginatorIdentifierOrKey = __utils._encode_choice<
    OriginatorIdentifierOrKey
>(
    {
        issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
        subjectKeyIdentifier: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_SubjectKeyIdentifier,
            __utils.BER
        ),
        originatorPublicKey: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_OriginatorPublicKey,
            __utils.BER
        ),
    },
    __utils.BER
);

export class OtherKeyAttribute {
    constructor(
        readonly keyAttributeIdentifier: asn1.OBJECT_IDENTIFIER,
        readonly keyAttribute: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyAttributeIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyAttribute",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OtherKeyAttribute: __utils.ComponentSpec[] = [];

export const _decode_OtherKeyAttribute = function (
    el: asn1.ASN1Element
): OtherKeyAttribute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyAttributeIdentifier!: asn1.OBJECT_IDENTIFIER;
    let keyAttribute: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        keyAttributeIdentifier: (_el: asn1.ASN1Element): void => {
            keyAttributeIdentifier = __utils._decodeObjectIdentifier(_el);
        },
        keyAttribute: (_el: asn1.ASN1Element): void => {
            keyAttribute = __utils._decodeAny(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_OtherKeyAttribute,
        _extension_additions_list_spec_for_OtherKeyAttribute,
        _root_component_type_list_2_spec_for_OtherKeyAttribute,
        undefined
    );
    return new OtherKeyAttribute /* SEQUENCE_CONSTRUCTOR_CALL */(
        keyAttributeIdentifier,
        keyAttribute
    );
};
export const _encode_OtherKeyAttribute = function (
    value: OtherKeyAttribute,
    elGetter: __utils.ASN1Encoder<OtherKeyAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.keyAttributeIdentifier,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.keyAttribute === undefined
                    ? undefined
                    : __utils._encodeAny(value.keyAttribute, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class RecipientKeyIdentifier {
    constructor(
        readonly subjectKeyIdentifier: SubjectKeyIdentifier,
        readonly date: asn1.GeneralizedTime | undefined,
        readonly otherKeyAttribute: OtherKeyAttribute | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subjectKeyIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "date",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "otherKeyAttribute",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RecipientKeyIdentifier: __utils.ComponentSpec[] = [];

export const _decode_RecipientKeyIdentifier = function (
    el: asn1.ASN1Element
): RecipientKeyIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subjectKeyIdentifier!: SubjectKeyIdentifier;
    let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let otherKeyAttribute: asn1.OPTIONAL<OtherKeyAttribute>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        subjectKeyIdentifier: (_el: asn1.ASN1Element): void => {
            subjectKeyIdentifier = _decode_SubjectKeyIdentifier(_el);
        },
        date: (_el: asn1.ASN1Element): void => {
            date = __utils._decodeGeneralizedTime(_el);
        },
        otherKeyAttribute: (_el: asn1.ASN1Element): void => {
            otherKeyAttribute = _decode_OtherKeyAttribute(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RecipientKeyIdentifier,
        _extension_additions_list_spec_for_RecipientKeyIdentifier,
        _root_component_type_list_2_spec_for_RecipientKeyIdentifier,
        undefined
    );
    return new RecipientKeyIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
        subjectKeyIdentifier,
        date,
        otherKeyAttribute
    );
};
export const _encode_RecipientKeyIdentifier = function (
    value: RecipientKeyIdentifier,
    elGetter: __utils.ASN1Encoder<RecipientKeyIdentifier>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_SubjectKeyIdentifier(
                    value.subjectKeyIdentifier,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.date === undefined
                    ? undefined
                    : __utils._encodeGeneralizedTime(value.date, __utils.BER),
                /* IF_ABSENT  */ value.otherKeyAttribute === undefined
                    ? undefined
                    : _encode_OtherKeyAttribute(
                          value.otherKeyAttribute,
                          __utils.BER
                      ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type KeyAgreementRecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber }
    | { recipientKeyIdentifier: RecipientKeyIdentifier };
export const _decode_KeyAgreementRecipientIdentifier = __utils._decode_inextensible_choice<
    KeyAgreementRecipientIdentifier
>({
    "UNIVERSAL 16": ["issuerAndSerialNumber", _decode_IssuerAndSerialNumber],
    "CONTEXT 0": [
        "recipientKeyIdentifier",
        __utils._decode_implicit<RecipientKeyIdentifier>(
            () => _decode_RecipientKeyIdentifier
        ),
    ],
});
export const _encode_KeyAgreementRecipientIdentifier = __utils._encode_choice<
    KeyAgreementRecipientIdentifier
>(
    {
        issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
        recipientKeyIdentifier: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_RecipientKeyIdentifier,
            __utils.BER
        ),
    },
    __utils.BER
);

export class RecipientEncryptedKey {
    constructor(
        readonly recipientIdentifier: KeyAgreementRecipientIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "recipientIdentifier",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RecipientEncryptedKey: __utils.ComponentSpec[] = [];

export const _decode_RecipientEncryptedKey = function (
    el: asn1.ASN1Element
): RecipientEncryptedKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "RecipientEncryptedKey contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "recipientIdentifier";
    sequence[1].name = "encryptedKey";
    let recipientIdentifier!: KeyAgreementRecipientIdentifier;
    let encryptedKey!: EncryptedKey;
    recipientIdentifier = _decode_KeyAgreementRecipientIdentifier(sequence[0]);
    encryptedKey = _decode_EncryptedKey(sequence[1]);
    // TODO: Validate values.
    return new RecipientEncryptedKey(recipientIdentifier, encryptedKey);
};
export const _encode_RecipientEncryptedKey = function (
    value: RecipientEncryptedKey,
    elGetter: __utils.ASN1Encoder<RecipientEncryptedKey>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_KeyAgreementRecipientIdentifier(
                    value.recipientIdentifier,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EncryptedKey(
                    value.encryptedKey,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type RecipientEncryptedKeys = RecipientEncryptedKey[]; // SequenceOfType
export const _decode_RecipientEncryptedKeys = __utils._decodeSequenceOf<
    RecipientEncryptedKey
>(() => _decode_RecipientEncryptedKey);
export const _encode_RecipientEncryptedKeys = __utils._encodeSequenceOf<
    RecipientEncryptedKey
>(() => _encode_RecipientEncryptedKey, __utils.BER);

export class KeyAgreementRecipientInfo {
    constructor(
        readonly version: Version,
        readonly originator: OriginatorIdentifierOrKey,
        readonly userKeyingMaterial: asn1.OCTET_STRING | undefined,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreementRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originator",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userKeyingMaterial",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientEncryptedKeys",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyAgreementRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyAgreementRecipientInfo: __utils.ComponentSpec[] = [];

export const _decode_KeyAgreementRecipientInfo = function (
    el: asn1.ASN1Element
): KeyAgreementRecipientInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let originator!: OriginatorIdentifierOrKey;
    let userKeyingMaterial: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
    let recipientEncryptedKeys!: RecipientEncryptedKeys;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        originator: (_el: asn1.ASN1Element): void => {
            originator = __utils._decode_implicit<OriginatorIdentifierOrKey>(
                () => _decode_OriginatorIdentifierOrKey
            )(_el);
        },
        userKeyingMaterial: (_el: asn1.ASN1Element): void => {
            userKeyingMaterial = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(_el);
        },
        keyEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                _el
            );
        },
        recipientEncryptedKeys: (_el: asn1.ASN1Element): void => {
            recipientEncryptedKeys = _decode_RecipientEncryptedKeys(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KeyAgreementRecipientInfo,
        _extension_additions_list_spec_for_KeyAgreementRecipientInfo,
        _root_component_type_list_2_spec_for_KeyAgreementRecipientInfo,
        undefined
    );
    return new KeyAgreementRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        originator,
        userKeyingMaterial,
        keyEncryptionAlgorithm,
        recipientEncryptedKeys
    );
};
export const _encode_KeyAgreementRecipientInfo = function (
    value: KeyAgreementRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyAgreementRecipientInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_OriginatorIdentifierOrKey,
                    __utils.BER
                )(value.originator, __utils.BER),
                /* IF_ABSENT  */ value.userKeyingMaterial === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => __utils._encodeOctetString,
                          __utils.BER
                      )(value.userKeyingMaterial, __utils.BER),
                /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                    value.keyEncryptionAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_RecipientEncryptedKeys(
                    value.recipientEncryptedKeys,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class KeyEncryptionKeyIdentifier {
    constructor(
        readonly keyIdentifier: asn1.OCTET_STRING,
        readonly date: asn1.GeneralizedTime | undefined,
        readonly otherKeyAttribute: OtherKeyAttribute | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyEncryptionKeyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "date",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "otherKeyAttribute",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyEncryptionKeyIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyEncryptionKeyIdentifier: __utils.ComponentSpec[] = [];

export const _decode_KeyEncryptionKeyIdentifier = function (
    el: asn1.ASN1Element
): KeyEncryptionKeyIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyIdentifier!: asn1.OCTET_STRING;
    let date: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let otherKeyAttribute: asn1.OPTIONAL<OtherKeyAttribute>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        keyIdentifier: (_el: asn1.ASN1Element): void => {
            keyIdentifier = __utils._decodeOctetString(_el);
        },
        date: (_el: asn1.ASN1Element): void => {
            date = __utils._decodeGeneralizedTime(_el);
        },
        otherKeyAttribute: (_el: asn1.ASN1Element): void => {
            otherKeyAttribute = _decode_OtherKeyAttribute(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KeyEncryptionKeyIdentifier,
        _extension_additions_list_spec_for_KeyEncryptionKeyIdentifier,
        _root_component_type_list_2_spec_for_KeyEncryptionKeyIdentifier,
        undefined
    );
    return new KeyEncryptionKeyIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
        keyIdentifier,
        date,
        otherKeyAttribute
    );
};
export const _encode_KeyEncryptionKeyIdentifier = function (
    value: KeyEncryptionKeyIdentifier,
    elGetter: __utils.ASN1Encoder<KeyEncryptionKeyIdentifier>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeOctetString(
                    value.keyIdentifier,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.date === undefined
                    ? undefined
                    : __utils._encodeGeneralizedTime(value.date, __utils.BER),
                /* IF_ABSENT  */ value.otherKeyAttribute === undefined
                    ? undefined
                    : _encode_OtherKeyAttribute(
                          value.otherKeyAttribute,
                          __utils.BER
                      ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class KeyEncryptionKeyRecipientInfo {
    constructor(
        readonly version: Version,
        readonly keyEncryptionKeyIdentifier: KeyEncryptionKeyIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        readonly encryptedKey: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyEncryptionKeyRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionKeyIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyEncryptionKeyRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyEncryptionKeyRecipientInfo: __utils.ComponentSpec[] = [];

export const _decode_KeyEncryptionKeyRecipientInfo = function (
    el: asn1.ASN1Element
): KeyEncryptionKeyRecipientInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError(
            "KeyEncryptionKeyRecipientInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "keyEncryptionKeyIdentifier";
    sequence[2].name = "keyEncryptionAlgorithm";
    sequence[3].name = "encryptedKey";
    let version!: Version;
    let keyEncryptionKeyIdentifier!: KeyEncryptionKeyIdentifier;
    let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
    let encryptedKey!: EncryptedKey;
    version = _decode_Version(sequence[0]);
    keyEncryptionKeyIdentifier = _decode_KeyEncryptionKeyIdentifier(
        sequence[1]
    );
    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
        sequence[2]
    );
    encryptedKey = _decode_EncryptedKey(sequence[3]);
    // TODO: Validate values.
    return new KeyEncryptionKeyRecipientInfo(
        version,
        keyEncryptionKeyIdentifier,
        keyEncryptionAlgorithm,
        encryptedKey
    );
};
export const _encode_KeyEncryptionKeyRecipientInfo = function (
    value: KeyEncryptionKeyRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyEncryptionKeyRecipientInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_KeyEncryptionKeyIdentifier(
                    value.keyEncryptionKeyIdentifier,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                    value.keyEncryptionAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EncryptedKey(
                    value.encryptedKey,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type RecipientInfo =
    | { keyTransportRecipientInfo: KeyTransportRecipientInfo }
    | { keyAgreementRecipientInfo: KeyAgreementRecipientInfo }
    | { keyEncryptionKeyRecipientInfo: KeyEncryptionKeyRecipientInfo };
export const _decode_RecipientInfo = __utils._decode_inextensible_choice<
    RecipientInfo
>({
    "UNIVERSAL 16": [
        "keyTransportRecipientInfo",
        _decode_KeyTransportRecipientInfo,
    ],
    "CONTEXT 1": [
        "keyAgreementRecipientInfo",
        __utils._decode_implicit<KeyAgreementRecipientInfo>(
            () => _decode_KeyAgreementRecipientInfo
        ),
    ],
    "CONTEXT 2": [
        "keyEncryptionKeyRecipientInfo",
        __utils._decode_implicit<KeyEncryptionKeyRecipientInfo>(
            () => _decode_KeyEncryptionKeyRecipientInfo
        ),
    ],
});
export const _encode_RecipientInfo = __utils._encode_choice<RecipientInfo>(
    {
        keyTransportRecipientInfo: _encode_KeyTransportRecipientInfo,
        keyAgreementRecipientInfo: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_KeyAgreementRecipientInfo,
            __utils.BER
        ),
        keyEncryptionKeyRecipientInfo: __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            2,
            () => _encode_KeyEncryptionKeyRecipientInfo,
            __utils.BER
        ),
    },
    __utils.BER
);

export type RecipientInfos = RecipientInfo[]; // SetOfType
export const _decode_RecipientInfos = __utils._decodeSetOf<RecipientInfo>(
    () => _decode_RecipientInfo
);
export const _encode_RecipientInfos = __utils._encodeSetOf<RecipientInfo>(
    () => _encode_RecipientInfo,
    __utils.BER
);

export type ContentEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_ContentEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_ContentEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export class EncryptedContentInfo {
    constructor(
        readonly contentType: asn1.OBJECT_IDENTIFIER,
        readonly contentEncryptionAlgorithm: ContentEncryptionAlgorithmIdentifier,
        readonly encryptedContent: ENCRYPTED<asn1.ASN1Element> | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContent",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [];

export const _decode_EncryptedContentInfo = function (
    el: asn1.ASN1Element
): EncryptedContentInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let contentType!: asn1.OBJECT_IDENTIFIER;
    let contentEncryptionAlgorithm!: ContentEncryptionAlgorithmIdentifier;
    let encryptedContent: asn1.OPTIONAL<ENCRYPTED<asn1.ASN1Element>>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        contentType: (_el: asn1.ASN1Element): void => {
            contentType = __utils._decodeObjectIdentifier(_el);
        },
        contentEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
            contentEncryptionAlgorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                _el
            );
        },
        encryptedContent: (_el: asn1.ASN1Element): void => {
            encryptedContent = __utils._decode_implicit<
                ENCRYPTED<asn1.ASN1Element>
            >(() =>
                _get_decoder_for_ENCRYPTED<asn1.ASN1Element>(__utils._decodeAny)
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EncryptedContentInfo,
        _extension_additions_list_spec_for_EncryptedContentInfo,
        _root_component_type_list_2_spec_for_EncryptedContentInfo,
        undefined
    );
    return new EncryptedContentInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        contentType,
        contentEncryptionAlgorithm,
        encryptedContent
    );
};
export const _encode_EncryptedContentInfo = function (
    value: EncryptedContentInfo,
    elGetter: __utils.ASN1Encoder<EncryptedContentInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.contentType,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_ContentEncryptionAlgorithmIdentifier(
                    value.contentEncryptionAlgorithm,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.encryptedContent === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () =>
                              _get_encoder_for_ENCRYPTED<asn1.ASN1Element>(
                                  __utils._encodeAny
                              ),
                          __utils.BER
                      )(value.encryptedContent, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class EnvelopedData {
    constructor(
        readonly version: Version,
        readonly originatorInfo: OriginatorInfo | undefined,
        readonly recipientInfos: RecipientInfos,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttributes: Attributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unprotectedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EnvelopedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EnvelopedData: __utils.ComponentSpec[] = [];

export const _decode_EnvelopedData = function (
    el: asn1.ASN1Element
): EnvelopedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
    let recipientInfos!: RecipientInfos;
    let encryptedContentInfo!: EncryptedContentInfo;
    let unprotectedAttributes: asn1.OPTIONAL<Attributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        originatorInfo: (_el: asn1.ASN1Element): void => {
            originatorInfo = __utils._decode_implicit<OriginatorInfo>(
                () => _decode_OriginatorInfo
            )(_el);
        },
        recipientInfos: (_el: asn1.ASN1Element): void => {
            recipientInfos = _decode_RecipientInfos(_el);
        },
        encryptedContentInfo: (_el: asn1.ASN1Element): void => {
            encryptedContentInfo = _decode_EncryptedContentInfo(_el);
        },
        unprotectedAttributes: (_el: asn1.ASN1Element): void => {
            unprotectedAttributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EnvelopedData,
        _extension_additions_list_spec_for_EnvelopedData,
        _root_component_type_list_2_spec_for_EnvelopedData,
        undefined
    );
    return new EnvelopedData /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        originatorInfo,
        recipientInfos,
        encryptedContentInfo,
        unprotectedAttributes
    );
};
export const _encode_EnvelopedData = function (
    value: EnvelopedData,
    elGetter: __utils.ASN1Encoder<EnvelopedData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* IF_ABSENT  */ value.originatorInfo === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_OriginatorInfo,
                          __utils.BER
                      )(value.originatorInfo, __utils.BER),
                /* REQUIRED   */ _encode_RecipientInfos(
                    value.recipientInfos,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EncryptedContentInfo(
                    value.encryptedContentInfo,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.unprotectedAttributes === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_Attributes,
                          __utils.BER
                      )(value.unprotectedAttributes, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectClassAssignment: OTHER-KEY-ATTRIBUTE

// TODO: ObjectSetAssignment: OtherKeyAttributeTable

// TODO: ObjectAssignment: signed-and-enveloped-data

export class SignedAndEnvelopedData {
    constructor(
        readonly version: Version,
        readonly recipientInfos: KeyTransportRecipientInfo[],
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly certificates: CertificateSet | undefined,
        readonly crls: CertificateRevocationLists | undefined,
        readonly signerInfos: SignerInfo[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedAndEnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithms",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signerInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignedAndEnvelopedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedAndEnvelopedData: __utils.ComponentSpec[] = [];

export const _decode_SignedAndEnvelopedData = function (
    el: asn1.ASN1Element
): SignedAndEnvelopedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let recipientInfos!: KeyTransportRecipientInfo[];
    let digestAlgorithms!: DigestAlgorithmIdentifiers;
    let encryptedContentInfo!: EncryptedContentInfo;
    let certificates: asn1.OPTIONAL<CertificateSet>;
    let crls: asn1.OPTIONAL<CertificateRevocationLists>;
    let signerInfos!: SignerInfo[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        recipientInfos: (_el: asn1.ASN1Element): void => {
            recipientInfos = __utils._decodeSetOf<KeyTransportRecipientInfo>(
                () => _decode_KeyTransportRecipientInfo
            )(_el);
        },
        digestAlgorithms: (_el: asn1.ASN1Element): void => {
            digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
        },
        encryptedContentInfo: (_el: asn1.ASN1Element): void => {
            encryptedContentInfo = _decode_EncryptedContentInfo(_el);
        },
        certificates: (_el: asn1.ASN1Element): void => {
            certificates = __utils._decode_implicit<CertificateSet>(
                () => _decode_CertificateSet
            )(_el);
        },
        crls: (_el: asn1.ASN1Element): void => {
            crls = __utils._decode_implicit<CertificateRevocationLists>(
                () => _decode_CertificateRevocationLists
            )(_el);
        },
        signerInfos: (_el: asn1.ASN1Element): void => {
            signerInfos = __utils._decodeSetOf<SignerInfo>(
                () => _decode_SignerInfo
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SignedAndEnvelopedData,
        _extension_additions_list_spec_for_SignedAndEnvelopedData,
        _root_component_type_list_2_spec_for_SignedAndEnvelopedData,
        undefined
    );
    return new SignedAndEnvelopedData /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        recipientInfos,
        digestAlgorithms,
        encryptedContentInfo,
        certificates,
        crls,
        signerInfos
    );
};
export const _encode_SignedAndEnvelopedData = function (
    value: SignedAndEnvelopedData,
    elGetter: __utils.ASN1Encoder<SignedAndEnvelopedData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ __utils._encodeSetOf<
                    KeyTransportRecipientInfo
                >(() => _encode_KeyTransportRecipientInfo, __utils.BER)(
                    value.recipientInfos,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                    value.digestAlgorithms,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EncryptedContentInfo(
                    value.encryptedContentInfo,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.certificates === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_CertificateSet,
                          __utils.BER
                      )(value.certificates, __utils.BER),
                /* IF_ABSENT  */ value.crls === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_CertificateRevocationLists,
                          __utils.BER
                      )(value.crls, __utils.BER),
                /* REQUIRED   */ __utils._encodeSetOf<SignerInfo>(
                    () => _encode_SignerInfo,
                    __utils.BER
                )(value.signerInfos, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: digested-data

export class DigestedData {
    constructor(
        readonly version: Version,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly contentInfo: ContentInfo,
        readonly digest: HASH<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DigestedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DigestedData: __utils.ComponentSpec[] = [];

export const _decode_DigestedData = function (
    el: asn1.ASN1Element
): DigestedData {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError(
            "DigestedData contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "digestAlgorithm";
    sequence[2].name = "contentInfo";
    sequence[3].name = "digest";
    let version!: Version;
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let contentInfo!: ContentInfo;
    let digest!: HASH<asn1.ASN1Element>;
    version = _decode_Version(sequence[0]);
    digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[1]);
    contentInfo = _decode_ContentInfo(sequence[2]);
    digest = _get_decoder_for_HASH<asn1.ASN1Element>(__utils._decodeAny)(
        sequence[3]
    );
    // TODO: Validate values.
    return new DigestedData(version, digestAlgorithm, contentInfo, digest);
};
export const _encode_DigestedData = function (
    value: DigestedData,
    elGetter: __utils.ASN1Encoder<DigestedData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                    value.digestAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_ContentInfo(
                    value.contentInfo,
                    __utils.BER
                ),
                /* REQUIRED   */ _get_encoder_for_HASH<asn1.ASN1Element>(
                    __utils._encodeAny
                )(value.digest, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: encrypted-data

export class EncryptedData {
    constructor(
        readonly version: Version,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttributes: Attributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unprotectedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedData: __utils.ComponentSpec[] = [];

export const _decode_EncryptedData = function (
    el: asn1.ASN1Element
): EncryptedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let encryptedContentInfo!: EncryptedContentInfo;
    let unprotectedAttributes: asn1.OPTIONAL<Attributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        encryptedContentInfo: (_el: asn1.ASN1Element): void => {
            encryptedContentInfo = _decode_EncryptedContentInfo(_el);
        },
        unprotectedAttributes: (_el: asn1.ASN1Element): void => {
            unprotectedAttributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EncryptedData,
        _extension_additions_list_spec_for_EncryptedData,
        _root_component_type_list_2_spec_for_EncryptedData,
        undefined
    );
    return new EncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        encryptedContentInfo,
        unprotectedAttributes
    );
};
export const _encode_EncryptedData = function (
    value: EncryptedData,
    elGetter: __utils.ASN1Encoder<EncryptedData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_EncryptedContentInfo(
                    value.encryptedContentInfo,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.unprotectedAttributes === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_Attributes,
                          __utils.BER
                      )(value.unprotectedAttributes, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: authenticated-data

export type MessageAuthenticationCodeAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_MessageAuthenticationCodeAlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_MessageAuthenticationCodeAlgorithmIdentifier = _encode_AlgorithmIdentifier;

export type MessageAuthenticationCode = asn1.OCTET_STRING; // OctetStringType
export const _decode_MessageAuthenticationCode = __utils._decodeOctetString;
export const _encode_MessageAuthenticationCode = __utils._encodeOctetString;

export class AuthenticatedData {
    constructor(
        readonly version: Version,
        readonly originatorInfo: OriginatorInfo | undefined,
        readonly recipientInfos: RecipientInfos,
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithmIdentifier,
        readonly digestAlgorithm: DigestAlgorithmIdentifier | undefined,
        readonly contentInfo: ContentInfo,
        readonly authenticatedAttributes: Attributes | undefined,
        readonly messageAuthenticationCode: MessageAuthenticationCode,
        readonly unauthenticatedAttributes: Attributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipientInfos",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "macAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageAuthenticationCode",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unauthenticatedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AuthenticatedData: __utils.ComponentSpec[] = [];

export const _decode_AuthenticatedData = function (
    el: asn1.ASN1Element
): AuthenticatedData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
    let recipientInfos!: RecipientInfos;
    let macAlgorithm!: MessageAuthenticationCodeAlgorithmIdentifier;
    let digestAlgorithm: asn1.OPTIONAL<DigestAlgorithmIdentifier>;
    let contentInfo!: ContentInfo;
    let authenticatedAttributes: asn1.OPTIONAL<Attributes>;
    let messageAuthenticationCode!: MessageAuthenticationCode;
    let unauthenticatedAttributes: asn1.OPTIONAL<Attributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        originatorInfo: (_el: asn1.ASN1Element): void => {
            originatorInfo = __utils._decode_implicit<OriginatorInfo>(
                () => _decode_OriginatorInfo
            )(_el);
        },
        recipientInfos: (_el: asn1.ASN1Element): void => {
            recipientInfos = _decode_RecipientInfos(_el);
        },
        macAlgorithm: (_el: asn1.ASN1Element): void => {
            macAlgorithm = _decode_MessageAuthenticationCodeAlgorithmIdentifier(
                _el
            );
        },
        digestAlgorithm: (_el: asn1.ASN1Element): void => {
            digestAlgorithm = __utils._decode_implicit<
                DigestAlgorithmIdentifier
            >(() => _decode_DigestAlgorithmIdentifier)(_el);
        },
        contentInfo: (_el: asn1.ASN1Element): void => {
            contentInfo = _decode_ContentInfo(_el);
        },
        authenticatedAttributes: (_el: asn1.ASN1Element): void => {
            authenticatedAttributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(_el);
        },
        messageAuthenticationCode: (_el: asn1.ASN1Element): void => {
            messageAuthenticationCode = _decode_MessageAuthenticationCode(_el);
        },
        unauthenticatedAttributes: (_el: asn1.ASN1Element): void => {
            unauthenticatedAttributes = __utils._decode_implicit<Attributes>(
                () => _decode_Attributes
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AuthenticatedData,
        _extension_additions_list_spec_for_AuthenticatedData,
        _root_component_type_list_2_spec_for_AuthenticatedData,
        undefined
    );
    return new AuthenticatedData /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        originatorInfo,
        recipientInfos,
        macAlgorithm,
        digestAlgorithm,
        contentInfo,
        authenticatedAttributes,
        messageAuthenticationCode,
        unauthenticatedAttributes
    );
};
export const _encode_AuthenticatedData = function (
    value: AuthenticatedData,
    elGetter: __utils.ASN1Encoder<AuthenticatedData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* IF_ABSENT  */ value.originatorInfo === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_OriginatorInfo,
                          __utils.BER
                      )(value.originatorInfo, __utils.BER),
                /* REQUIRED   */ _encode_RecipientInfos(
                    value.recipientInfos,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithmIdentifier(
                    value.macAlgorithm,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.digestAlgorithm === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_DigestAlgorithmIdentifier,
                          __utils.BER
                      )(value.digestAlgorithm, __utils.BER),
                /* REQUIRED   */ _encode_ContentInfo(
                    value.contentInfo,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.authenticatedAttributes === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => _encode_Attributes,
                          __utils.BER
                      )(value.authenticatedAttributes, __utils.BER),
                /* REQUIRED   */ _encode_MessageAuthenticationCode(
                    value.messageAuthenticationCode,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.unauthenticatedAttributes === undefined
                    ? undefined
                    : __utils._encode_implicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => _encode_Attributes,
                          __utils.BER
                      )(value.unauthenticatedAttributes, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export const id_pkcs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [member_body, /* usa */ 840, /* rsadsi */ 113549, /* pkcs */ 1],
    iso
);

export const id_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 1],
    id_pkcs
);

export const id_signed_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 2],
    id_pkcs
);

export const id_enveloped_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 3],
    id_pkcs
);

export const id_signed_and_enveloped_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 4],
    id_pkcs
);

export const id_digested_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 5],
    id_pkcs
);

export const id_encrypted_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 6],
    id_pkcs
);

export const id_authenticated_data: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9, 16, 1, 2],
    id_pkcs
);

/* END_MODULE PKCS7 */
