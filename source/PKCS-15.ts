
/*
    BEGIN_MODULE PKCS-15
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-15.modules.pkcs-15
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    informationFramework,
    authenticationFramework,
    certificateExtensions
} from "./UsefulDefinitions";
export {
    informationFramework,
    authenticationFramework,
    certificateExtensions
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    Name,
    Attribute,
    _decode_Name,
    _encode_Name,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";
export {
    Name,
    Attribute,
    _decode_Name,
    _encode_Name,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    Certificate,
    AttributeCertificate,
    CertificateSerialNumber,
    SubjectPublicKeyInfo,
    _decode_Certificate,
    _encode_Certificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo
} from "./AuthenticationFramework";
export {
    Certificate,
    AttributeCertificate,
    CertificateSerialNumber,
    SubjectPublicKeyInfo,
    _decode_Certificate,
    _encode_Certificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo
} from "./AuthenticationFramework";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    GeneralNames,
    KeyUsage,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_KeyUsage,
    _encode_KeyUsage
} from "./CertificateExtensions";
export {
    GeneralNames,
    KeyUsage,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_KeyUsage,
    _encode_KeyUsage
} from "./CertificateExtensions";

import * as CryptographicMessageSyntax from "./CryptographicMessageSyntax";
import {
    RecipientInfos,
    RecipientInfo,
    OriginatorInfo,
    sha_1,
    id_alg_CMS3DESwrap,
    id_alg_CMSRC2wrap,
    hMAC_SHA1,
    des_ede3_cbc,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
    _decode_RecipientInfo,
    _encode_RecipientInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo
} from "./CryptographicMessageSyntax";
export {
    RecipientInfos,
    RecipientInfo,
    OriginatorInfo,
    sha_1,
    id_alg_CMS3DESwrap,
    id_alg_CMSRC2wrap,
    hMAC_SHA1,
    des_ede3_cbc,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
    _decode_RecipientInfo,
    _encode_RecipientInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo
} from "./CryptographicMessageSyntax";

import * as PKCS_1 from "./PKCS-1";
import {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey
} from "./PKCS-1";
export {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey
} from "./PKCS-1";

import * as PKCS_5 from "./PKCS-5";
import {
    AlgorithmIdentifier,
    SupportingAlgorithms,
    PBKDF2Algorithms,
    ALGORITHM_IDENTIFIER,
    id_hmacWithSHA1,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_SupportingAlgorithms,
    _encode_SupportingAlgorithms,
    _decode_PBKDF2Algorithms,
    _encode_PBKDF2Algorithms,
    _decode_ALGORITHM_IDENTIFIER,
    _encode_ALGORITHM_IDENTIFIER
} from "./PKCS-5";
export {
    AlgorithmIdentifier,
    SupportingAlgorithms,
    PBKDF2Algorithms,
    ALGORITHM_IDENTIFIER,
    id_hmacWithSHA1,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_SupportingAlgorithms,
    _encode_SupportingAlgorithms,
    _decode_PBKDF2Algorithms,
    _encode_PBKDF2Algorithms,
    _decode_ALGORITHM_IDENTIFIER,
    _encode_ALGORITHM_IDENTIFIER
} from "./PKCS-5";

import * as ANSI_X9_62 from "./ANSI-X9-62";
import {
    ECPoint,
    Parameters,
    _decode_ECPoint,
    _encode_ECPoint,
    _decode_Parameters,
    _encode_Parameters
} from "./ANSI-X9-62";
export {
    ECPoint,
    Parameters,
    _decode_ECPoint,
    _encode_ECPoint,
    _decode_Parameters,
    _encode_Parameters
} from "./ANSI-X9-62";

import * as ANSI_X9_42 from "./ANSI-X9-42";
import {
    DiffieHellmanPublicNumber,
    DomainParameters,
    _decode_DiffieHellmanPublicNumber,
    _encode_DiffieHellmanPublicNumber,
    _decode_DomainParameters,
    _encode_DomainParameters
} from "./ANSI-X9-42";
export {
    DiffieHellmanPublicNumber,
    DomainParameters,
    _decode_DiffieHellmanPublicNumber,
    _encode_DiffieHellmanPublicNumber,
    _decode_DomainParameters,
    _encode_DomainParameters
} from "./ANSI-X9-42";

import * as PKIXCMP from "./PKIXCMP";
import {
    OOBCertHash,
    _decode_OOBCertHash,
    _encode_OOBCertHash
} from "./PKIXCMP";
export {
    OOBCertHash,
    _decode_OOBCertHash,
    _encode_OOBCertHash
} from "./PKIXCMP";


export const pkcs15_ub_reference: asn1.INTEGER = 255;

export const pkcs15_ub_index: asn1.INTEGER = 65535;

export const pkcs15_ub_identifier: asn1.INTEGER = 255;

export const pkcs15_ub_label: asn1.INTEGER = pkcs15_ub_identifier;

export const pkcs15_lb_minPinLength: asn1.INTEGER = 4;

export const pkcs15_ub_minPinLength: asn1.INTEGER = 8;

export const pkcs15_ub_storedPinLength: asn1.INTEGER = 64;

export const pkcs15_ub_recordLength: asn1.INTEGER = 16383;

export const pkcs15_ub_userConsent: asn1.INTEGER = 15;

export const pkcs15_ub_securityConditions: asn1.INTEGER = 255;

export const pkcs15_ub_seInfo: asn1.INTEGER = 255;

export const pkcs15: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-15 */ 15,
]);

export const pkcs15_mo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], pkcs15);

export const pkcs15_at: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], pkcs15);

export const pkcs15_ct: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], pkcs15);

// TODO: ObjectSetAssignment: KeyIdentifiers

// TODO: ObjectClassAssignment: KEY-IDENTIFIER

// TODO: ObjectAssignment: issuerAndSerialNumber

// TODO: ObjectAssignment: subjectKeyId

// TODO: ObjectAssignment: issuerAndSerialNumberHash

// TODO: ObjectAssignment: subjectKeyHash

// TODO: ObjectAssignment: issuerKeyHash

// TODO: ObjectAssignment: issuerNameHash

// TODO: ObjectAssignment: subjectNameHash

export type SHA1Parameters = asn1.NULL; // NullType
export const _decode_SHA1Parameters = __utils._decodeNull;
export const _encode_SHA1Parameters = __utils._encodeNull;


export type TokenInfo_version = asn1.INTEGER;
export const TokenInfo_version_v1: TokenInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const _decode_TokenInfo_version = __utils._decodeInteger;
export const _encode_TokenInfo_version = __utils._encodeInteger;


export type Label = asn1.UTF8String; // UTF8String
export const _decode_Label = __utils._decodeUTF8String;
export const _encode_Label = __utils._encodeUTF8String;


export type TokenFlags = asn1.BIT_STRING;
export const TokenFlags_readonly: number = 0; /* LONG_NAMED_BIT */
export const readonly: number = TokenFlags_readonly; /* SHORT_NAMED_BIT */
export const TokenFlags_loginRequired: number = 1; /* LONG_NAMED_BIT */
export const loginRequired: number = TokenFlags_loginRequired; /* SHORT_NAMED_BIT */
export const TokenFlags_prnGeneration: number = 2; /* LONG_NAMED_BIT */
export const prnGeneration: number = TokenFlags_prnGeneration; /* SHORT_NAMED_BIT */
export const TokenFlags_eidCompliant: number = 3; /* LONG_NAMED_BIT */
export const eidCompliant: number = TokenFlags_eidCompliant; /* SHORT_NAMED_BIT */
export const _decode_TokenFlags = __utils._decodeBitString;
export const _encode_TokenFlags = __utils._encodeBitString;


export class SecurityEnvironmentInfo {
    constructor (
        readonly se: asn1.INTEGER,
        readonly owner: asn1.OBJECT_IDENTIFIER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityEnvironmentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("se", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("owner", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SecurityEnvironmentInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SecurityEnvironmentInfo: __utils.ComponentSpec[] = [

];

export const _decode_SecurityEnvironmentInfo = function (el: asn1.ASN1Element): SecurityEnvironmentInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SecurityEnvironmentInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "se";
    sequence[1].name = "owner";
    let se!: asn1.INTEGER;
    let owner!: asn1.OBJECT_IDENTIFIER;
    se = __utils._decodeInteger(sequence[0]);
    owner = __utils._decodeObjectIdentifier(sequence[1]);
    // TODO: Validate values.
    return new SecurityEnvironmentInfo(
        se,
        owner,
        sequence.slice(2),
    );
};
export const _encode_SecurityEnvironmentInfo = function (value: SecurityEnvironmentInfo, elGetter: __utils.ASN1Encoder<SecurityEnvironmentInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.se, __utils.BER),
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.owner, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class RecordInfo {
    constructor (
        readonly oDFRecordLength: asn1.INTEGER | undefined,
        readonly prKDFRecordLength: asn1.INTEGER | undefined,
        readonly puKDFRecordLength: asn1.INTEGER | undefined,
        readonly sKDFRecordLength: asn1.INTEGER | undefined,
        readonly cDFRecordLength: asn1.INTEGER | undefined,
        readonly dODFRecordLength: asn1.INTEGER | undefined,
        readonly aODFRecordLength: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RecordInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("oDFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("prKDFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("puKDFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("sKDFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("cDFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("dODFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("aODFRecordLength", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RecordInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_RecordInfo: __utils.ComponentSpec[] = [

];

export const _decode_RecordInfo = function (el: asn1.ASN1Element): RecordInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let oDFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    let prKDFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    let puKDFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    let sKDFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    let cDFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    let dODFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    let aODFRecordLength: asn1.OPTIONAL<asn1.INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "oDFRecordLength": (_el: asn1.ASN1Element): void => { oDFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "prKDFRecordLength": (_el: asn1.ASN1Element): void => { prKDFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "puKDFRecordLength": (_el: asn1.ASN1Element): void => { puKDFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "sKDFRecordLength": (_el: asn1.ASN1Element): void => { sKDFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "cDFRecordLength": (_el: asn1.ASN1Element): void => { cDFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "dODFRecordLength": (_el: asn1.ASN1Element): void => { dODFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "aODFRecordLength": (_el: asn1.ASN1Element): void => { aODFRecordLength = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecordInfo,
        _extension_additions_list_spec_for_RecordInfo,
        _root_component_type_list_2_spec_for_RecordInfo,
        undefined,
    );
    return new RecordInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        oDFRecordLength,
        prKDFRecordLength,
        puKDFRecordLength,
        sKDFRecordLength,
        cDFRecordLength,
        dODFRecordLength,
        aODFRecordLength
    );
};
export const _encode_RecordInfo = function (value: RecordInfo, elGetter: __utils.ASN1Encoder<RecordInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.oDFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInteger, __utils.BER)(value.oDFRecordLength, __utils.BER)),
            /* IF_ABSENT  */ ((value.prKDFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.prKDFRecordLength, __utils.BER)),
            /* IF_ABSENT  */ ((value.puKDFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeInteger, __utils.BER)(value.puKDFRecordLength, __utils.BER)),
            /* IF_ABSENT  */ ((value.sKDFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeInteger, __utils.BER)(value.sKDFRecordLength, __utils.BER)),
            /* IF_ABSENT  */ ((value.cDFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeInteger, __utils.BER)(value.cDFRecordLength, __utils.BER)),
            /* IF_ABSENT  */ ((value.dODFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeInteger, __utils.BER)(value.dODFRecordLength, __utils.BER)),
            /* IF_ABSENT  */ ((value.aODFRecordLength === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeInteger, __utils.BER)(value.aODFRecordLength, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Reference = asn1.INTEGER;
export const _decode_Reference = __utils._decodeInteger;
export const _encode_Reference = __utils._encodeInteger;


export class AlgorithmInfo {
    constructor (
        readonly reference: Reference,
        readonly algorithm: asn1.INTEGER,
        readonly parameters: asn1.ASN1Element,
        readonly supportedOperations: asn1.ASN1Element,
        readonly algId: asn1.OBJECT_IDENTIFIER | undefined,
        readonly algRef: Reference | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("reference", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("parameters", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("supportedOperations", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("algId", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("algRef", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AlgorithmInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_AlgorithmInfo: __utils.ComponentSpec[] = [

];

export const _decode_AlgorithmInfo = function (el: asn1.ASN1Element): AlgorithmInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let reference!: Reference;
    let algorithm!: asn1.INTEGER;
    let parameters!: asn1.ASN1Element;
    let supportedOperations!: asn1.ASN1Element;
    let algId: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let algRef: asn1.OPTIONAL<Reference>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "reference": (_el: asn1.ASN1Element): void => { reference = _decode_Reference(_el); },
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = __utils._decodeInteger(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); },
        "supportedOperations": (_el: asn1.ASN1Element): void => { supportedOperations = __utils._decodeAny(_el); },
        "algId": (_el: asn1.ASN1Element): void => { algId = __utils._decodeObjectIdentifier(_el); },
        "algRef": (_el: asn1.ASN1Element): void => { algRef = _decode_Reference(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlgorithmInfo,
        _extension_additions_list_spec_for_AlgorithmInfo,
        _root_component_type_list_2_spec_for_AlgorithmInfo,
        undefined,
    );
    return new AlgorithmInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        reference,
        algorithm,
        parameters,
        supportedOperations,
        algId,
        algRef
    );
};
export const _encode_AlgorithmInfo = function (value: AlgorithmInfo, elGetter: __utils.ASN1Encoder<AlgorithmInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Reference(value.reference, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.algorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.parameters, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.supportedOperations, __utils.BER),
            /* IF_ABSENT  */ ((value.algId === undefined) ? undefined : __utils._encodeObjectIdentifier(value.algId, __utils.BER)),
            /* IF_ABSENT  */ ((value.algRef === undefined) ? undefined : _encode_Reference(value.algRef, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Path {
    constructor (
        readonly path: asn1.OCTET_STRING,
        readonly index: asn1.INTEGER | undefined,
        readonly length: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Path: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("path", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("index", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("length", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Path: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_Path: __utils.ComponentSpec[] = [

];

export const _decode_Path = function (el: asn1.ASN1Element): Path {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let path!: asn1.OCTET_STRING;
    let index: asn1.OPTIONAL<asn1.INTEGER>;
    let length: asn1.OPTIONAL<asn1.INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "path": (_el: asn1.ASN1Element): void => { path = __utils._decodeOctetString(_el); },
        "index": (_el: asn1.ASN1Element): void => { index = __utils._decodeInteger(_el); },
        "length": (_el: asn1.ASN1Element): void => { length = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Path,
        _extension_additions_list_spec_for_Path,
        _root_component_type_list_2_spec_for_Path,
        undefined,
    );
    return new Path( /* SEQUENCE_CONSTRUCTOR_CALL */
        path,
        index,
        length
    );
};
export const _encode_Path = function (value: Path, elGetter: __utils.ASN1Encoder<Path>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeOctetString(value.path, __utils.BER),
            /* IF_ABSENT  */ ((value.index === undefined) ? undefined : __utils._encodeInteger(value.index, __utils.BER)),
            /* IF_ABSENT  */ ((value.length === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInteger, __utils.BER)(value.length, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


const alg_id_sha1 = new AlgorithmIdentifier(
    sha_1,
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null,
    ),
);

export class DigestInfoWithDefault {
    constructor (
        readonly digestAlg: AlgorithmIdentifier | undefined,
        readonly digest: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestInfoWithDefault: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("digestAlg", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("digest", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DigestInfoWithDefault: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_DigestInfoWithDefault: __utils.ComponentSpec[] = [

];
export const _default_value_for_DigestInfoWithDefault__digestAlg = alg_id_sha1;
export const _decode_DigestInfoWithDefault = function (el: asn1.ASN1Element): DigestInfoWithDefault {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let digestAlg: asn1.OPTIONAL<AlgorithmIdentifier> = _default_value_for_DigestInfoWithDefault__digestAlg;
    let digest!: asn1.OCTET_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "digestAlg": (_el: asn1.ASN1Element): void => { digestAlg = _decode_AlgorithmIdentifier(_el); },
        "digest": (_el: asn1.ASN1Element): void => { digest = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigestInfoWithDefault,
        _extension_additions_list_spec_for_DigestInfoWithDefault,
        _root_component_type_list_2_spec_for_DigestInfoWithDefault,
        undefined,
    );
    return new DigestInfoWithDefault( /* SEQUENCE_CONSTRUCTOR_CALL */
        digestAlg,
        digest
    );
};
export const _encode_DigestInfoWithDefault = function (value: DigestInfoWithDefault, elGetter: __utils.ASN1Encoder<DigestInfoWithDefault>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.digestAlg === undefined || __utils.deepEq(value.digestAlg, _default_value_for_DigestInfoWithDefault__digestAlg) ? undefined : _encode_AlgorithmIdentifier(value.digestAlg, __utils.BER)),
            /* REQUIRED   */ __utils._encodeOctetString(value.digest, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class URL_urlWithDigest {
    constructor (
        readonly url: asn1.IA5String,
        readonly digest: DigestInfoWithDefault
    ) {}
}
export const _root_component_type_list_1_spec_for_URL_urlWithDigest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("url", false, __utils.hasTag(asn1.ASN1TagClass.universal, 22), undefined, undefined),
    new __utils.ComponentSpec("digest", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_URL_urlWithDigest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_URL_urlWithDigest: __utils.ComponentSpec[] = [

];

export const _decode_URL_urlWithDigest = function (el: asn1.ASN1Element): URL_urlWithDigest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("URL-urlWithDigest contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "url";
    sequence[1].name = "digest";
    let url!: asn1.IA5String;
    let digest!: DigestInfoWithDefault;
    url = __utils._decodeIA5String(sequence[0]);
    digest = _decode_DigestInfoWithDefault(sequence[1]);
    // TODO: Validate values.
    return new URL_urlWithDigest(
        url,
        digest,

    );
};
export const _encode_URL_urlWithDigest = function (value: URL_urlWithDigest, elGetter: __utils.ASN1Encoder<URL_urlWithDigest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeIA5String(value.url, __utils.BER),
            /* REQUIRED   */ _encode_DigestInfoWithDefault(value.digest, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type URL =
    { url: asn1.PrintableString }
    | { urlWithDigest: URL_urlWithDigest };
export const _decode_URL = __utils._decode_inextensible_choice<URL>({
    "UNIVERSAL 19": [ "url", __utils._decodePrintableString ],
    "CONTEXT 3": [ "urlWithDigest", __utils._decode_implicit<URL_urlWithDigest>(() => _decode_URL_urlWithDigest) ]
});
export const _encode_URL = __utils._encode_choice<URL>({
    "url": __utils._encodePrintableString,
    "urlWithDigest": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_URL_urlWithDigest, __utils.BER),
}, __utils.BER);


export type ReferencedValue<Type> =
    { path: Path }
    | { url: URL };
export const _get_decoder_for_ReferencedValue = function <Type>(_decode_Type: __utils.ASN1Decoder<Type>) {
return __utils._decode_inextensible_choice<ReferencedValue<Type>>({
    "UNIVERSAL 16": [ "path", _decode_Path ],
    "UNIVERSAL 19": [ "url", _decode_URL ],
    "CONTEXT 3": [ "url", _decode_URL ],
})
}
export const _get_encoder_for_ReferencedValue = function <Type>(_encode_Type: __utils.ASN1Encoder<Type>) {
return __utils._encode_choice<ReferencedValue<Type>>({
    "path": _encode_Path,
    "url": _encode_URL,
}, __utils.BER)
}


export type LastUpdate =
    { generalizedTime: asn1.GeneralizedTime }
    | { referencedTime: ReferencedValue<asn1.GeneralizedTime> }
    | asn1.ASN1Element;
export const _decode_LastUpdate = __utils._decode_extensible_choice<LastUpdate>({
    "UNIVERSAL 24": [ "generalizedTime", __utils._decodeGeneralizedTime ],
    "UNIVERSAL 16": [ "referencedTime", _get_decoder_for_ReferencedValue<asn1.GeneralizedTime>(__utils._decodeGeneralizedTime) ],
    "UNIVERSAL 19": [ "referencedTime", _get_decoder_for_ReferencedValue<asn1.GeneralizedTime>(__utils._decodeGeneralizedTime) ],
    "CONTEXT 3": [ "referencedTime", _get_decoder_for_ReferencedValue<asn1.GeneralizedTime>(__utils._decodeGeneralizedTime) ],
});
export const _encode_LastUpdate = __utils._encode_choice<LastUpdate>({
    "generalizedTime": __utils._encodeGeneralizedTime,
    "referencedTime": _get_encoder_for_ReferencedValue<asn1.GeneralizedTime>(__utils._encodeGeneralizedTime),
}, __utils.BER);


export class TokenInfo {
    constructor (
        readonly version: TokenInfo_version,
        readonly serialNumber: asn1.OCTET_STRING,
        readonly manufacturerID: Label | undefined,
        readonly label: Label | undefined,
        readonly tokenflags: TokenFlags,
        readonly seInfo: SecurityEnvironmentInfo[] | undefined,
        readonly recordInfo: RecordInfo | undefined,
        readonly supportedAlgorithms: AlgorithmInfo[] | undefined,
        readonly issuerId: Label | undefined,
        readonly holderId: Label | undefined,
        readonly lastUpdate: LastUpdate | undefined,
        readonly preferredLanguage: asn1.PrintableString | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TokenInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("manufacturerID", true, __utils.hasTag(asn1.ASN1TagClass.universal, 12), undefined, undefined),
    new __utils.ComponentSpec("label", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("tokenflags", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("seInfo", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("recordInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("supportedAlgorithms", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TokenInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_TokenInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuerId", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("holderId", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("preferredLanguage", true, __utils.hasTag(asn1.ASN1TagClass.universal, 19), undefined, undefined)
];

export const _decode_TokenInfo = function (el: asn1.ASN1Element): TokenInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: TokenInfo_version;
    let serialNumber!: asn1.OCTET_STRING;
    let manufacturerID: asn1.OPTIONAL<Label>;
    let label: asn1.OPTIONAL<Label>;
    let tokenflags!: TokenFlags;
    let seInfo: asn1.OPTIONAL<SecurityEnvironmentInfo[]>;
    let recordInfo: asn1.OPTIONAL<RecordInfo>;
    let supportedAlgorithms: asn1.OPTIONAL<AlgorithmInfo[]>;
    let issuerId: asn1.OPTIONAL<Label>;
    let holderId: asn1.OPTIONAL<Label>;
    let lastUpdate: asn1.OPTIONAL<LastUpdate>;
    let preferredLanguage: asn1.OPTIONAL<asn1.PrintableString>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_TokenInfo_version(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = __utils._decodeOctetString(_el); },
        "manufacturerID": (_el: asn1.ASN1Element): void => { manufacturerID = _decode_Label(_el); },
        "label": (_el: asn1.ASN1Element): void => { label = __utils._decode_implicit<Label>(() => _decode_Label)(_el); },
        "tokenflags": (_el: asn1.ASN1Element): void => { tokenflags = _decode_TokenFlags(_el); },
        "seInfo": (_el: asn1.ASN1Element): void => { seInfo = __utils._decodeSequenceOf<SecurityEnvironmentInfo>(() => _decode_SecurityEnvironmentInfo)(_el); },
        "recordInfo": (_el: asn1.ASN1Element): void => { recordInfo = __utils._decode_implicit<RecordInfo>(() => _decode_RecordInfo)(_el); },
        "supportedAlgorithms": (_el: asn1.ASN1Element): void => { supportedAlgorithms = __utils._decode_implicit<AlgorithmInfo[]>(() => __utils._decodeSequenceOf<AlgorithmInfo>(() => _decode_AlgorithmInfo))(_el); },
        "issuerId": (_el: asn1.ASN1Element): void => { issuerId = __utils._decode_implicit<Label>(() => _decode_Label)(_el); },
        "holderId": (_el: asn1.ASN1Element): void => { holderId = __utils._decode_implicit<Label>(() => _decode_Label)(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = __utils._decode_implicit<LastUpdate>(() => _decode_LastUpdate)(_el); },
        "preferredLanguage": (_el: asn1.ASN1Element): void => { preferredLanguage = __utils._decodePrintableString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TokenInfo,
        _extension_additions_list_spec_for_TokenInfo,
        _root_component_type_list_2_spec_for_TokenInfo,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TokenInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        serialNumber,
        manufacturerID,
        label,
        tokenflags,
        seInfo,
        recordInfo,
        supportedAlgorithms,
        issuerId,
        holderId,
        lastUpdate,
        preferredLanguage,
        _unrecognizedExtensionsList
    );
};
export const _encode_TokenInfo = function (value: TokenInfo, elGetter: __utils.ASN1Encoder<TokenInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TokenInfo_version(value.version, __utils.BER),
            /* REQUIRED   */ __utils._encodeOctetString(value.serialNumber, __utils.BER),
            /* IF_ABSENT  */ ((value.manufacturerID === undefined) ? undefined : _encode_Label(value.manufacturerID, __utils.BER)),
            /* IF_ABSENT  */ ((value.label === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Label, __utils.BER)(value.label, __utils.BER)),
            /* REQUIRED   */ _encode_TokenFlags(value.tokenflags, __utils.BER),
            /* IF_ABSENT  */ ((value.seInfo === undefined) ? undefined : __utils._encodeSequenceOf<SecurityEnvironmentInfo>(() => _encode_SecurityEnvironmentInfo, __utils.BER)(value.seInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.recordInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_RecordInfo, __utils.BER)(value.recordInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.supportedAlgorithms === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<AlgorithmInfo>(() => _encode_AlgorithmInfo, __utils.BER), __utils.BER)(value.supportedAlgorithms, __utils.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.issuerId === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_Label, __utils.BER)(value.issuerId, __utils.BER)),
            /* IF_ABSENT  */ ((value.holderId === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_Label, __utils.BER)(value.holderId, __utils.BER)),
            /* IF_ABSENT  */ ((value.lastUpdate === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_LastUpdate, __utils.BER)(value.lastUpdate, __utils.BER)),
            /* IF_ABSENT  */ ((value.preferredLanguage === undefined) ? undefined : __utils._encodePrintableString(value.preferredLanguage, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectClassAssignment: PKCS15-OPAQUE

export type Operations = asn1.BIT_STRING;
export const Operations_compute_checksum: number = 0; /* LONG_NAMED_BIT */
export const compute_checksum: number = Operations_compute_checksum; /* SHORT_NAMED_BIT */
export const Operations_compute_signature: number = 1; /* LONG_NAMED_BIT */
export const compute_signature: number = Operations_compute_signature; /* SHORT_NAMED_BIT */
export const Operations_verify_checksum: number = 2; /* LONG_NAMED_BIT */
export const verify_checksum: number = Operations_verify_checksum; /* SHORT_NAMED_BIT */
export const Operations_verify_signature: number = 3; /* LONG_NAMED_BIT */
export const verify_signature: number = Operations_verify_signature; /* SHORT_NAMED_BIT */
export const Operations_encipher: number = 4; /* LONG_NAMED_BIT */
export const encipher: number = Operations_encipher; /* SHORT_NAMED_BIT */
export const Operations_decipher: number = 5; /* LONG_NAMED_BIT */
export const decipher: number = Operations_decipher; /* SHORT_NAMED_BIT */
export const Operations_hash: number = 6; /* LONG_NAMED_BIT */
export const hash: number = Operations_hash; /* SHORT_NAMED_BIT */
export const Operations_generate_key: number = 7; /* LONG_NAMED_BIT */
export const generate_key: number = Operations_generate_key; /* SHORT_NAMED_BIT */
export const _decode_Operations = __utils._decodeBitString;
export const _encode_Operations = __utils._encodeBitString;


// TODO: ObjectClassAssignment: PKCS15-ALGORITHM

// TODO: ObjectAssignment: pkcs15-alg-null

// TODO: ObjectSetAssignment: AlgorithmSet

export type PKCS15Token_version = asn1.INTEGER;
export const PKCS15Token_version_v1: PKCS15Token_version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const _decode_PKCS15Token_version = __utils._decodeInteger;
export const _encode_PKCS15Token_version = __utils._encodeInteger;


export type Identifier = asn1.OCTET_STRING; // OctetStringType
export const _decode_Identifier = __utils._decodeOctetString;
export const _encode_Identifier = __utils._encodeOctetString;


export class PasswordInfo {
    constructor (
        readonly hint: Label | undefined,
        readonly algId: AlgorithmIdentifier,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PasswordInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("hint", true, __utils.hasTag(asn1.ASN1TagClass.universal, 12), undefined, undefined),
    new __utils.ComponentSpec("algId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
];
export const _root_component_type_list_2_spec_for_PasswordInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PasswordInfo: __utils.ComponentSpec[] = [

];

export const _decode_PasswordInfo = function (el: asn1.ASN1Element): PasswordInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let hint: asn1.OPTIONAL<Label>;
    let algId!: AlgorithmIdentifier;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "hint": (_el: asn1.ASN1Element): void => { hint = _decode_Label(_el); },
        "algId": (_el: asn1.ASN1Element): void => { algId = _decode_AlgorithmIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PasswordInfo,
        _extension_additions_list_spec_for_PasswordInfo,
        _root_component_type_list_2_spec_for_PasswordInfo,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PasswordInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        hint,
        algId,
        _unrecognizedExtensionsList
    );
};
export const _encode_PasswordInfo = function (value: PasswordInfo, elGetter: __utils.ASN1Encoder<PasswordInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.hint === undefined) ? undefined : _encode_Label(value.hint, __utils.BER)),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algId, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KeyManagementInfo_Item_keyInfo =
    { recipientInfo: RecipientInfo }
    | { passwordInfo: PasswordInfo };
export const _decode_KeyManagementInfo_Item_keyInfo = __utils._decode_inextensible_choice<KeyManagementInfo_Item_keyInfo>({
    "UNIVERSAL 16": [ "recipientInfo", _decode_RecipientInfo ],
    "CONTEXT 1": [ "recipientInfo", _decode_RecipientInfo ],
    "CONTEXT 2": [ "recipientInfo", _decode_RecipientInfo ],
    "CONTEXT 0": [ "passwordInfo", __utils._decode_implicit<PasswordInfo>(() => _decode_PasswordInfo) ]
});
export const _encode_KeyManagementInfo_Item_keyInfo = __utils._encode_choice<KeyManagementInfo_Item_keyInfo>({
    "recipientInfo": _encode_RecipientInfo,
    "passwordInfo": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_PasswordInfo, __utils.BER),
}, __utils.BER);


export class KeyManagementInfo_Item {
    constructor (
        readonly keyId: Identifier,
        readonly keyInfo: KeyManagementInfo_Item_keyInfo
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyManagementInfo_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("keyInfo", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyManagementInfo_Item: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_KeyManagementInfo_Item: __utils.ComponentSpec[] = [

];

export const _decode_KeyManagementInfo_Item = function (el: asn1.ASN1Element): KeyManagementInfo_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("KeyManagementInfo-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "keyId";
    sequence[1].name = "keyInfo";
    let keyId!: Identifier;
    let keyInfo!: KeyManagementInfo_Item_keyInfo;
    keyId = _decode_Identifier(sequence[0]);
    keyInfo = _decode_KeyManagementInfo_Item_keyInfo(sequence[1]);
    // TODO: Validate values.
    return new KeyManagementInfo_Item(
        keyId,
        keyInfo,

    );
};
export const _encode_KeyManagementInfo_Item = function (value: KeyManagementInfo_Item, elGetter: __utils.ASN1Encoder<KeyManagementInfo_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identifier(value.keyId, __utils.BER),
            /* REQUIRED   */ _encode_KeyManagementInfo_Item_keyInfo(value.keyInfo, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KeyManagementInfo = KeyManagementInfo_Item[]; // SequenceOfType
export const _decode_KeyManagementInfo = __utils._decodeSequenceOf<KeyManagementInfo_Item>(() => _decode_KeyManagementInfo_Item);
export const _encode_KeyManagementInfo = __utils._encodeSequenceOf<KeyManagementInfo_Item>(() => _encode_KeyManagementInfo_Item, __utils.BER);


export type EnvelopedData_version = asn1.INTEGER;
export const EnvelopedData_version_v0: EnvelopedData_version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const EnvelopedData_version_v1: EnvelopedData_version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const EnvelopedData_version_v2: EnvelopedData_version = 2; /* LONG_NAMED_INTEGER_VALUE */
export const EnvelopedData_version_v3: EnvelopedData_version = 3; /* LONG_NAMED_INTEGER_VALUE */
export const EnvelopedData_version_v4: EnvelopedData_version = 4; /* LONG_NAMED_INTEGER_VALUE */
export const _decode_EnvelopedData_version = __utils._decodeInteger;
export const _encode_EnvelopedData_version = __utils._encodeInteger;


export class EncryptedContentInfo<Type> {
    constructor (
        readonly contentType: asn1.OBJECT_IDENTIFIER,
        readonly contentEncryptionAlgorithm: AlgorithmIdentifier,
        readonly encryptedContent: asn1.OCTET_STRING | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contentType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("contentEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedContent", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_EncryptedContentInfo: __utils.ComponentSpec[] = [

];

export const _get_decoder_for_EncryptedContentInfo = function <Type>(_decode_Type: __utils.ASN1Decoder<Type>) {
return function (el: asn1.ASN1Element): EncryptedContentInfo<Type> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let contentType!: asn1.OBJECT_IDENTIFIER;
    let contentEncryptionAlgorithm!: AlgorithmIdentifier;
    let encryptedContent: asn1.OPTIONAL<asn1.OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "contentType": (_el: asn1.ASN1Element): void => { contentType = __utils._decodeObjectIdentifier(_el); },
        "contentEncryptionAlgorithm": (_el: asn1.ASN1Element): void => { contentEncryptionAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "encryptedContent": (_el: asn1.ASN1Element): void => { encryptedContent = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptedContentInfo,
        _extension_additions_list_spec_for_EncryptedContentInfo,
        _root_component_type_list_2_spec_for_EncryptedContentInfo,
        undefined,
    );
    return new EncryptedContentInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        contentType,
        contentEncryptionAlgorithm,
        encryptedContent
    );
}
}
export const _get_encoder_for_EncryptedContentInfo = function <Type>(_encode_Type: __utils.ASN1Encoder<Type>) {
return function (value: EncryptedContentInfo<Type>, elGetter: __utils.ASN1Encoder<EncryptedContentInfo<Type>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.contentType, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.contentEncryptionAlgorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.encryptedContent === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER)(value.encryptedContent, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export class EnvelopedData<Type> {
    constructor (
        readonly version: EnvelopedData_version,
        readonly originatorInfo: OriginatorInfo | undefined,
        readonly recipientInfos: RecipientInfos,
        readonly encryptedContentInfo: EncryptedContentInfo<Type>,
        readonly unprotectedAttrs: Attribute[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EnvelopedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("originatorInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("recipientInfos", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("encryptedContentInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("unprotectedAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EnvelopedData: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_EnvelopedData: __utils.ComponentSpec[] = [

];

export const _get_decoder_for_EnvelopedData = function <Type>(_decode_Type: __utils.ASN1Decoder<Type>) {
return function (el: asn1.ASN1Element): EnvelopedData<Type> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: EnvelopedData_version;
    let originatorInfo: asn1.OPTIONAL<OriginatorInfo>;
    let recipientInfos!: RecipientInfos;
    let encryptedContentInfo!: EncryptedContentInfo<Type>;
    let unprotectedAttrs: asn1.OPTIONAL<Attribute[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_EnvelopedData_version(_el); },
        "originatorInfo": (_el: asn1.ASN1Element): void => { originatorInfo = __utils._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfos": (_el: asn1.ASN1Element): void => { recipientInfos = _decode_RecipientInfos(_el); },
        "encryptedContentInfo": (_el: asn1.ASN1Element): void => { encryptedContentInfo = _get_decoder_for_EncryptedContentInfo<Type>(_decode_Type)(_el); },
        "unprotectedAttrs": (_el: asn1.ASN1Element): void => { unprotectedAttrs = __utils._decode_implicit<Attribute[]>(() => __utils._decodeSetOf<Attribute>(() => _decode_Attribute))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnvelopedData,
        _extension_additions_list_spec_for_EnvelopedData,
        _root_component_type_list_2_spec_for_EnvelopedData,
        undefined,
    );
    return new EnvelopedData( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        originatorInfo,
        recipientInfos,
        encryptedContentInfo,
        unprotectedAttrs
    );
}
}
export const _get_encoder_for_EnvelopedData = function <Type>(_encode_Type: __utils.ASN1Encoder<Type>) {
return function (value: EnvelopedData<Type>, elGetter: __utils.ASN1Encoder<EnvelopedData<Type>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EnvelopedData_version(value.version, __utils.BER),
            /* IF_ABSENT  */ ((value.originatorInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_OriginatorInfo, __utils.BER)(value.originatorInfo, __utils.BER)),
            /* REQUIRED   */ _encode_RecipientInfos(value.recipientInfos, __utils.BER),
            /* REQUIRED   */ _get_encoder_for_EncryptedContentInfo<Type>(_encode_Type)(value.encryptedContentInfo, __utils.BER),
            /* IF_ABSENT  */ ((value.unprotectedAttrs === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER), __utils.BER)(value.unprotectedAttrs, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export type PathOrObjects<ObjectType> =
    { path: Path }
    | { objects: ObjectType[] }
    | { indirect_protected: ReferencedValue<EnvelopedData<ObjectType[]>> }
    | { direct_protected: EnvelopedData<ObjectType[]> }
    | asn1.ASN1Element;
export const _get_decoder_for_PathOrObjects = function <ObjectType>(_decode_ObjectType: __utils.ASN1Decoder<ObjectType>) {
return __utils._decode_extensible_choice<PathOrObjects<ObjectType>>({
    "UNIVERSAL 16": [ "path", _decode_Path ],
    "CONTEXT 0": [ "objects", __utils._decode_implicit<ObjectType[]>(() => __utils._decodeSequenceOf<ObjectType>(() => _decode_ObjectType)) ],
    "CONTEXT 1": [ "indirect_protected", __utils._decode_implicit<ReferencedValue<EnvelopedData<ObjectType[]>>>(() => _get_decoder_for_ReferencedValue<EnvelopedData<ObjectType[]>>(_get_decoder_for_EnvelopedData<ObjectType[]>(__utils._decodeSequenceOf<ObjectType>(() => _decode_ObjectType)))) ],
    "CONTEXT 2": [ "direct_protected", __utils._decode_implicit<EnvelopedData<ObjectType[]>>(() => _get_decoder_for_EnvelopedData<ObjectType[]>(__utils._decodeSequenceOf<ObjectType>(() => _decode_ObjectType))) ]
})
}
export const _get_encoder_for_PathOrObjects = function <ObjectType>(_encode_ObjectType: __utils.ASN1Encoder<ObjectType>) {
return __utils._encode_choice<PathOrObjects<ObjectType>>({
    "path": _encode_Path,
    "objects": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<ObjectType>(() => _encode_ObjectType, __utils.BER), __utils.BER),
    "indirect_protected": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_ReferencedValue<EnvelopedData<ObjectType[]>>(_get_encoder_for_EnvelopedData<ObjectType[]>(__utils._encodeSequenceOf<ObjectType>(() => _encode_ObjectType, __utils.BER))), __utils.BER),
    "direct_protected": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_EnvelopedData<ObjectType[]>(__utils._encodeSequenceOf<ObjectType>(() => _encode_ObjectType, __utils.BER)), __utils.BER),
}, __utils.BER)
}


export type CommonObjectFlags = asn1.BIT_STRING;
export const CommonObjectFlags_private_: number = 0; /* LONG_NAMED_BIT */
export const private_: number = CommonObjectFlags_private_; /* SHORT_NAMED_BIT */
export const CommonObjectFlags_modifiable: number = 1; /* LONG_NAMED_BIT */
export const modifiable: number = CommonObjectFlags_modifiable; /* SHORT_NAMED_BIT */
export const _decode_CommonObjectFlags = __utils._decodeBitString;
export const _encode_CommonObjectFlags = __utils._encodeBitString;


export type AccessMode = asn1.BIT_STRING;
export const AccessMode_read: number = 0; /* LONG_NAMED_BIT */
export const read: number = AccessMode_read; /* SHORT_NAMED_BIT */
export const AccessMode_update: number = 1; /* LONG_NAMED_BIT */
export const update: number = AccessMode_update; /* SHORT_NAMED_BIT */
export const AccessMode_execute: number = 2; /* LONG_NAMED_BIT */
export const execute: number = AccessMode_execute; /* SHORT_NAMED_BIT */
export const _decode_AccessMode = __utils._decodeBitString;
export const _encode_AccessMode = __utils._encodeBitString;


/* TODO: CHECK_RECURSIVE_DEFINITION */
export type SecurityCondition =
    { authId: Identifier }
    | { not: SecurityCondition }
    | { and: SecurityCondition[] }
    | { or: SecurityCondition[] }
    | asn1.ASN1Element;
export const _decode_SecurityCondition = __utils._decode_extensible_choice<SecurityCondition>({
    "UNIVERSAL 4": [ "authId", _decode_Identifier ],
    "CONTEXT 0": [ "not", __utils._decode_implicit<SecurityCondition>(() => _decode_SecurityCondition) ],
    "CONTEXT 1": [ "and", __utils._decode_implicit<SecurityCondition[]>(() => __utils._decodeSequenceOf<SecurityCondition>(() => _decode_SecurityCondition)) ],
    "CONTEXT 2": [ "or", __utils._decode_implicit<SecurityCondition[]>(() => __utils._decodeSequenceOf<SecurityCondition>(() => _decode_SecurityCondition)) ]
});
export const _encode_SecurityCondition = __utils._encode_choice<SecurityCondition>({
    "authId": _encode_Identifier,
    "not": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SecurityCondition, __utils.BER),
    "and": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<SecurityCondition>(() => _encode_SecurityCondition, __utils.BER), __utils.BER),
    "or": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<SecurityCondition>(() => _encode_SecurityCondition, __utils.BER), __utils.BER),
}, __utils.BER);


export class AccessControlRule {
    constructor (
        readonly accessMode: AccessMode,
        readonly securityCondition: SecurityCondition,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AccessControlRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("accessMode", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("securityCondition", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AccessControlRule: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_AccessControlRule: __utils.ComponentSpec[] = [

];

export const _decode_AccessControlRule = function (el: asn1.ASN1Element): AccessControlRule {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AccessControlRule contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "accessMode";
    sequence[1].name = "securityCondition";
    let accessMode!: AccessMode;
    let securityCondition!: SecurityCondition;
    accessMode = _decode_AccessMode(sequence[0]);
    securityCondition = _decode_SecurityCondition(sequence[1]);
    // TODO: Validate values.
    return new AccessControlRule(
        accessMode,
        securityCondition,
        sequence.slice(2),
    );
};
export const _encode_AccessControlRule = function (value: AccessControlRule, elGetter: __utils.ASN1Encoder<AccessControlRule>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessMode(value.accessMode, __utils.BER),
            /* REQUIRED   */ _encode_SecurityCondition(value.securityCondition, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CommonObjectAttributes {
    constructor (
        readonly label: Label | undefined,
        readonly flags: CommonObjectFlags | undefined,
        readonly authId: Identifier | undefined,
        readonly userConsent: asn1.INTEGER | undefined,
        readonly accessControlRules: AccessControlRule[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonObjectAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("label", true, __utils.hasTag(asn1.ASN1TagClass.universal, 12), undefined, undefined),
    new __utils.ComponentSpec("flags", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("authId", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonObjectAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonObjectAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("userConsent", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("accessControlRules", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];

export const _decode_CommonObjectAttributes = function (el: asn1.ASN1Element): CommonObjectAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let label: asn1.OPTIONAL<Label>;
    let flags: asn1.OPTIONAL<CommonObjectFlags>;
    let authId: asn1.OPTIONAL<Identifier>;
    let userConsent: asn1.OPTIONAL<asn1.INTEGER>;
    let accessControlRules: asn1.OPTIONAL<AccessControlRule[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "label": (_el: asn1.ASN1Element): void => { label = _decode_Label(_el); },
        "flags": (_el: asn1.ASN1Element): void => { flags = _decode_CommonObjectFlags(_el); },
        "authId": (_el: asn1.ASN1Element): void => { authId = _decode_Identifier(_el); },
        "userConsent": (_el: asn1.ASN1Element): void => { userConsent = __utils._decodeInteger(_el); },
        "accessControlRules": (_el: asn1.ASN1Element): void => { accessControlRules = __utils._decodeSequenceOf<AccessControlRule>(() => _decode_AccessControlRule)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonObjectAttributes,
        _extension_additions_list_spec_for_CommonObjectAttributes,
        _root_component_type_list_2_spec_for_CommonObjectAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonObjectAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        label,
        flags,
        authId,
        userConsent,
        accessControlRules,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonObjectAttributes = function (value: CommonObjectAttributes, elGetter: __utils.ASN1Encoder<CommonObjectAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.label === undefined) ? undefined : _encode_Label(value.label, __utils.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : _encode_CommonObjectFlags(value.flags, __utils.BER)),
            /* IF_ABSENT  */ ((value.authId === undefined) ? undefined : _encode_Identifier(value.authId, __utils.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.userConsent === undefined) ? undefined : __utils._encodeInteger(value.userConsent, __utils.BER)),
            /* IF_ABSENT  */ ((value.accessControlRules === undefined) ? undefined : __utils._encodeSequenceOf<AccessControlRule>(() => _encode_AccessControlRule, __utils.BER)(value.accessControlRules, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes> {
    constructor (
        readonly commonObjectAttributes: CommonObjectAttributes,
        readonly classAttributes: ClassAttributes,
        readonly subClassAttributes: SubClassAttributes | undefined,
        readonly typeAttributes: TypeAttributes
    ) {}
}
export const _root_component_type_list_1_spec_for_PKCS15Object: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("commonObjectAttributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("classAttributes", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("subClassAttributes", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("typeAttributes", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
];
export const _root_component_type_list_2_spec_for_PKCS15Object: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PKCS15Object: __utils.ComponentSpec[] = [

];

export const _get_decoder_for_PKCS15Object = function <ClassAttributes, SubClassAttributes, TypeAttributes>(_decode_ClassAttributes: __utils.ASN1Decoder<ClassAttributes>, _decode_SubClassAttributes: __utils.ASN1Decoder<SubClassAttributes>, _decode_TypeAttributes: __utils.ASN1Decoder<TypeAttributes>) {
return function (el: asn1.ASN1Element): PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let commonObjectAttributes!: CommonObjectAttributes;
    let classAttributes!: ClassAttributes;
    let subClassAttributes: asn1.OPTIONAL<SubClassAttributes>;
    let typeAttributes!: TypeAttributes;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "commonObjectAttributes": (_el: asn1.ASN1Element): void => { commonObjectAttributes = _decode_CommonObjectAttributes(_el); },
        "classAttributes": (_el: asn1.ASN1Element): void => { classAttributes = _decode_ClassAttributes(_el); },
        "subClassAttributes": (_el: asn1.ASN1Element): void => { subClassAttributes = __utils._decode_implicit<SubClassAttributes>(() => _decode_SubClassAttributes)(_el); },
        "typeAttributes": (_el: asn1.ASN1Element): void => { typeAttributes = __utils._decode_implicit<TypeAttributes>(() => _decode_TypeAttributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PKCS15Object,
        _extension_additions_list_spec_for_PKCS15Object,
        _root_component_type_list_2_spec_for_PKCS15Object,
        undefined,
    );
    return new PKCS15Object( /* SEQUENCE_CONSTRUCTOR_CALL */
        commonObjectAttributes,
        classAttributes,
        subClassAttributes,
        typeAttributes
    );
}
}
export const _get_encoder_for_PKCS15Object = function <ClassAttributes, SubClassAttributes, TypeAttributes>(_encode_ClassAttributes: __utils.ASN1Encoder<ClassAttributes>, _encode_SubClassAttributes: __utils.ASN1Encoder<SubClassAttributes>, _encode_TypeAttributes: __utils.ASN1Encoder<TypeAttributes>) {
return function (value: PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes>, elGetter: __utils.ASN1Encoder<PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CommonObjectAttributes(value.commonObjectAttributes, __utils.BER),
            /* REQUIRED   */ _encode_ClassAttributes(value.classAttributes, __utils.BER),
            /* IF_ABSENT  */ ((value.subClassAttributes === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SubClassAttributes, __utils.BER)(value.subClassAttributes, __utils.BER)),
            /* REQUIRED   */ __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_TypeAttributes, __utils.BER)(value.typeAttributes, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export type KeyUsageFlags = asn1.BIT_STRING;
export const KeyUsageFlags_encrypt: number = 0; /* LONG_NAMED_BIT */
export const encrypt: number = KeyUsageFlags_encrypt; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_decrypt: number = 1; /* LONG_NAMED_BIT */
export const decrypt: number = KeyUsageFlags_decrypt; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_sign: number = 2; /* LONG_NAMED_BIT */
export const sign: number = KeyUsageFlags_sign; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_signRecover: number = 3; /* LONG_NAMED_BIT */
export const signRecover: number = KeyUsageFlags_signRecover; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_wrap: number = 4; /* LONG_NAMED_BIT */
export const wrap: number = KeyUsageFlags_wrap; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_unwrap: number = 5; /* LONG_NAMED_BIT */
export const unwrap: number = KeyUsageFlags_unwrap; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_verify: number = 6; /* LONG_NAMED_BIT */
export const verify: number = KeyUsageFlags_verify; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_verifyRecover: number = 7; /* LONG_NAMED_BIT */
export const verifyRecover: number = KeyUsageFlags_verifyRecover; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_derive: number = 8; /* LONG_NAMED_BIT */
export const derive: number = KeyUsageFlags_derive; /* SHORT_NAMED_BIT */
export const KeyUsageFlags_nonRepudiation: number = 9; /* LONG_NAMED_BIT */
export const nonRepudiation: number = KeyUsageFlags_nonRepudiation; /* SHORT_NAMED_BIT */
export const _decode_KeyUsageFlags = __utils._decodeBitString;
export const _encode_KeyUsageFlags = __utils._encodeBitString;


export type KeyAccessFlags = asn1.BIT_STRING;
export const KeyAccessFlags_sensitive: number = 0; /* LONG_NAMED_BIT */
export const sensitive: number = KeyAccessFlags_sensitive; /* SHORT_NAMED_BIT */
export const KeyAccessFlags_extractable: number = 1; /* LONG_NAMED_BIT */
export const extractable: number = KeyAccessFlags_extractable; /* SHORT_NAMED_BIT */
export const KeyAccessFlags_alwaysSensitive: number = 2; /* LONG_NAMED_BIT */
export const alwaysSensitive: number = KeyAccessFlags_alwaysSensitive; /* SHORT_NAMED_BIT */
export const KeyAccessFlags_neverExtractable: number = 3; /* LONG_NAMED_BIT */
export const neverExtractable: number = KeyAccessFlags_neverExtractable; /* SHORT_NAMED_BIT */
export const KeyAccessFlags_local: number = 4; /* LONG_NAMED_BIT */
export const local: number = KeyAccessFlags_local; /* SHORT_NAMED_BIT */
export const _decode_KeyAccessFlags = __utils._decodeBitString;
export const _encode_KeyAccessFlags = __utils._encodeBitString;


export class CommonKeyAttributes {
    constructor (
        readonly iD: Identifier,
        readonly usage: KeyUsageFlags,
        readonly native: asn1.BOOLEAN | undefined,
        readonly accessFlags: KeyAccessFlags | undefined,
        readonly keyReference: Reference | undefined,
        readonly startDate: asn1.GeneralizedTime | undefined,
        readonly endDate: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("iD", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("usage", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("native", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("accessFlags", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("keyReference", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("startDate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("endDate", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonKeyAttributes: __utils.ComponentSpec[] = [

];
export const _default_value_for_CommonKeyAttributes__native = true;
export const _decode_CommonKeyAttributes = function (el: asn1.ASN1Element): CommonKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let iD!: Identifier;
    let usage!: KeyUsageFlags;
    let native: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_CommonKeyAttributes__native;
    let accessFlags: asn1.OPTIONAL<KeyAccessFlags>;
    let keyReference: asn1.OPTIONAL<Reference>;
    let startDate: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let endDate: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "iD": (_el: asn1.ASN1Element): void => { iD = _decode_Identifier(_el); },
        "usage": (_el: asn1.ASN1Element): void => { usage = _decode_KeyUsageFlags(_el); },
        "native": (_el: asn1.ASN1Element): void => { native = __utils._decodeBoolean(_el); },
        "accessFlags": (_el: asn1.ASN1Element): void => { accessFlags = _decode_KeyAccessFlags(_el); },
        "keyReference": (_el: asn1.ASN1Element): void => { keyReference = _decode_Reference(_el); },
        "startDate": (_el: asn1.ASN1Element): void => { startDate = __utils._decodeGeneralizedTime(_el); },
        "endDate": (_el: asn1.ASN1Element): void => { endDate = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonKeyAttributes,
        _extension_additions_list_spec_for_CommonKeyAttributes,
        _root_component_type_list_2_spec_for_CommonKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        iD,
        usage,
        native,
        accessFlags,
        keyReference,
        startDate,
        endDate,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonKeyAttributes = function (value: CommonKeyAttributes, elGetter: __utils.ASN1Encoder<CommonKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identifier(value.iD, __utils.BER),
            /* REQUIRED   */ _encode_KeyUsageFlags(value.usage, __utils.BER),
            /* IF_DEFAULT */ (value.native === undefined || __utils.deepEq(value.native, _default_value_for_CommonKeyAttributes__native) ? undefined : __utils._encodeBoolean(value.native, __utils.BER)),
            /* IF_ABSENT  */ ((value.accessFlags === undefined) ? undefined : _encode_KeyAccessFlags(value.accessFlags, __utils.BER)),
            /* IF_ABSENT  */ ((value.keyReference === undefined) ? undefined : _encode_Reference(value.keyReference, __utils.BER)),
            /* IF_ABSENT  */ ((value.startDate === undefined) ? undefined : __utils._encodeGeneralizedTime(value.startDate, __utils.BER)),
            /* IF_ABSENT  */ ((value.endDate === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeGeneralizedTime, __utils.BER)(value.endDate, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CredentialIdentifier {
    constructor (
        readonly idType: asn1.INTEGER,
        readonly idValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_CredentialIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("idType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("idValue", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CredentialIdentifier: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CredentialIdentifier: __utils.ComponentSpec[] = [

];

export const _decode_CredentialIdentifier = function (el: asn1.ASN1Element): CredentialIdentifier {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("CredentialIdentifier contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "idType";
    sequence[1].name = "idValue";
    let idType!: asn1.INTEGER;
    let idValue!: asn1.ASN1Element;
    idType = __utils._decodeInteger(sequence[0]);
    idValue = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new CredentialIdentifier(
        idType,
        idValue,

    );
};
export const _encode_CredentialIdentifier = function (value: CredentialIdentifier, elGetter: __utils.ASN1Encoder<CredentialIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.idType, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.idValue, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CommonPrivateKeyAttributes {
    constructor (
        readonly subjectName: Name | undefined,
        readonly keyIdentifiers: CredentialIdentifier[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonPrivateKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("subjectName", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyIdentifiers", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonPrivateKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonPrivateKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_CommonPrivateKeyAttributes = function (el: asn1.ASN1Element): CommonPrivateKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subjectName: asn1.OPTIONAL<Name>;
    let keyIdentifiers: asn1.OPTIONAL<CredentialIdentifier[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "subjectName": (_el: asn1.ASN1Element): void => { subjectName = _decode_Name(_el); },
        "keyIdentifiers": (_el: asn1.ASN1Element): void => { keyIdentifiers = __utils._decode_implicit<CredentialIdentifier[]>(() => __utils._decodeSequenceOf<CredentialIdentifier>(() => _decode_CredentialIdentifier))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonPrivateKeyAttributes,
        _extension_additions_list_spec_for_CommonPrivateKeyAttributes,
        _root_component_type_list_2_spec_for_CommonPrivateKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonPrivateKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        subjectName,
        keyIdentifiers,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonPrivateKeyAttributes = function (value: CommonPrivateKeyAttributes, elGetter: __utils.ASN1Encoder<CommonPrivateKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.subjectName === undefined) ? undefined : _encode_Name(value.subjectName, __utils.BER)),
            /* IF_ABSENT  */ ((value.keyIdentifiers === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<CredentialIdentifier>(() => _encode_CredentialIdentifier, __utils.BER), __utils.BER)(value.keyIdentifiers, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PrivateKeyObject<KeyAttributes> = PKCS15Object<CommonKeyAttributes, CommonPrivateKeyAttributes, KeyAttributes>; // DefinedType
export const _get_decoder_for_PrivateKeyObject = function <KeyAttributes>(_decode_KeyAttributes: __utils.ASN1Decoder<KeyAttributes>) {
return _get_decoder_for_PKCS15Object<CommonKeyAttributes, CommonPrivateKeyAttributes, KeyAttributes>(_decode_CommonKeyAttributes, _decode_CommonPrivateKeyAttributes, _decode_KeyAttributes)
}
export const _get_encoder_for_PrivateKeyObject = function <KeyAttributes>(_encode_KeyAttributes: __utils.ASN1Encoder<KeyAttributes>) {
return _get_encoder_for_PKCS15Object<CommonKeyAttributes, CommonPrivateKeyAttributes, KeyAttributes>(_encode_CommonKeyAttributes, _encode_CommonPrivateKeyAttributes, _encode_KeyAttributes)
}


export type ObjectValue<Type> =
    { indirect: ReferencedValue<Type> }
    | { direct: Type }
    | { indirect_protected: ReferencedValue<EnvelopedData<Type>> }
    | { direct_protected: EnvelopedData<Type> };
export const _get_decoder_for_ObjectValue = function <Type>(_decode_Type: __utils.ASN1Decoder<Type>) {
return __utils._decode_inextensible_choice<ObjectValue<Type>>({
    "UNIVERSAL 16": [ "indirect", _get_decoder_for_ReferencedValue<Type>(_decode_Type) ],
    "UNIVERSAL 19": [ "indirect", _get_decoder_for_ReferencedValue<Type>(_decode_Type) ],
    "CONTEXT 3": [ "indirect", _get_decoder_for_ReferencedValue<Type>(_decode_Type) ],
    "CONTEXT 0": [ "direct", __utils._decode_implicit<Type>(() => _decode_Type) ],
    "CONTEXT 1": [ "indirect_protected", __utils._decode_implicit<ReferencedValue<EnvelopedData<Type>>>(() => _get_decoder_for_ReferencedValue<EnvelopedData<Type>>(_get_decoder_for_EnvelopedData<Type>(_decode_Type))) ],
    "CONTEXT 2": [ "direct_protected", __utils._decode_implicit<EnvelopedData<Type>>(() => _get_decoder_for_EnvelopedData<Type>(_decode_Type)) ]
})
}
export const _get_encoder_for_ObjectValue = function <Type>(_encode_Type: __utils.ASN1Encoder<Type>) {
return __utils._encode_choice<ObjectValue<Type>>({
    "indirect": _get_encoder_for_ReferencedValue<Type>(_encode_Type),
    "direct": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Type, __utils.BER),
    "indirect_protected": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_ReferencedValue<EnvelopedData<Type>>(_get_encoder_for_EnvelopedData<Type>(_encode_Type)), __utils.BER),
    "direct_protected": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_EnvelopedData<Type>(_encode_Type), __utils.BER),
}, __utils.BER)
}


export class RSAPrivateKeyObject {
    constructor (
        readonly modulus: asn1.INTEGER | undefined,
        readonly publicExponent: asn1.INTEGER | undefined,
        readonly privateExponent: asn1.INTEGER | undefined,
        readonly prime1: asn1.INTEGER | undefined,
        readonly prime2: asn1.INTEGER | undefined,
        readonly exponent1: asn1.INTEGER | undefined,
        readonly exponent2: asn1.INTEGER | undefined,
        readonly coefficient: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RSAPrivateKeyObject: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("modulus", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("publicExponent", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("privateExponent", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("prime1", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("prime2", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("exponent1", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("exponent2", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("coefficient", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RSAPrivateKeyObject: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_RSAPrivateKeyObject: __utils.ComponentSpec[] = [

];

export const _decode_RSAPrivateKeyObject = function (el: asn1.ASN1Element): RSAPrivateKeyObject {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let modulus: asn1.OPTIONAL<asn1.INTEGER>;
    let publicExponent: asn1.OPTIONAL<asn1.INTEGER>;
    let privateExponent: asn1.OPTIONAL<asn1.INTEGER>;
    let prime1: asn1.OPTIONAL<asn1.INTEGER>;
    let prime2: asn1.OPTIONAL<asn1.INTEGER>;
    let exponent1: asn1.OPTIONAL<asn1.INTEGER>;
    let exponent2: asn1.OPTIONAL<asn1.INTEGER>;
    let coefficient: asn1.OPTIONAL<asn1.INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "modulus": (_el: asn1.ASN1Element): void => { modulus = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "publicExponent": (_el: asn1.ASN1Element): void => { publicExponent = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "privateExponent": (_el: asn1.ASN1Element): void => { privateExponent = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "prime1": (_el: asn1.ASN1Element): void => { prime1 = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "prime2": (_el: asn1.ASN1Element): void => { prime2 = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "exponent1": (_el: asn1.ASN1Element): void => { exponent1 = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "exponent2": (_el: asn1.ASN1Element): void => { exponent2 = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "coefficient": (_el: asn1.ASN1Element): void => { coefficient = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RSAPrivateKeyObject,
        _extension_additions_list_spec_for_RSAPrivateKeyObject,
        _root_component_type_list_2_spec_for_RSAPrivateKeyObject,
        undefined,
    );
    return new RSAPrivateKeyObject( /* SEQUENCE_CONSTRUCTOR_CALL */
        modulus,
        publicExponent,
        privateExponent,
        prime1,
        prime2,
        exponent1,
        exponent2,
        coefficient
    );
};
export const _encode_RSAPrivateKeyObject = function (value: RSAPrivateKeyObject, elGetter: __utils.ASN1Encoder<RSAPrivateKeyObject>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.modulus === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInteger, __utils.BER)(value.modulus, __utils.BER)),
            /* IF_ABSENT  */ ((value.publicExponent === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.publicExponent, __utils.BER)),
            /* IF_ABSENT  */ ((value.privateExponent === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeInteger, __utils.BER)(value.privateExponent, __utils.BER)),
            /* IF_ABSENT  */ ((value.prime1 === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeInteger, __utils.BER)(value.prime1, __utils.BER)),
            /* IF_ABSENT  */ ((value.prime2 === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeInteger, __utils.BER)(value.prime2, __utils.BER)),
            /* IF_ABSENT  */ ((value.exponent1 === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeInteger, __utils.BER)(value.exponent1, __utils.BER)),
            /* IF_ABSENT  */ ((value.exponent2 === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeInteger, __utils.BER)(value.exponent2, __utils.BER)),
            /* IF_ABSENT  */ ((value.coefficient === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => __utils._encodeInteger, __utils.BER)(value.coefficient, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class KeyInfo_paramsAndOps<ParameterType, OperationsType> {
    constructor (
        readonly parameters: ParameterType,
        readonly supportedOperations: OperationsType | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("parameters", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("supportedOperations", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_KeyInfo_paramsAndOps: __utils.ComponentSpec[] = [

];

export const _get_decoder_for_KeyInfo_paramsAndOps = function <ParameterType, OperationsType>(_decode_ParameterType: __utils.ASN1Decoder<ParameterType>, _decode_OperationsType: __utils.ASN1Decoder<OperationsType>) {
return function (el: asn1.ASN1Element): KeyInfo_paramsAndOps<ParameterType, OperationsType> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let parameters!: ParameterType;
    let supportedOperations: asn1.OPTIONAL<OperationsType>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "parameters": (_el: asn1.ASN1Element): void => { parameters = _decode_ParameterType(_el); },
        "supportedOperations": (_el: asn1.ASN1Element): void => { supportedOperations = _decode_OperationsType(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps,
        _extension_additions_list_spec_for_KeyInfo_paramsAndOps,
        _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps,
        undefined,
    );
    return new KeyInfo_paramsAndOps( /* SEQUENCE_CONSTRUCTOR_CALL */
        parameters,
        supportedOperations
    );
}
}
export const _get_encoder_for_KeyInfo_paramsAndOps = function <ParameterType, OperationsType>(_encode_ParameterType: __utils.ASN1Encoder<ParameterType>, _encode_OperationsType: __utils.ASN1Encoder<OperationsType>) {
return function (value: KeyInfo_paramsAndOps<ParameterType, OperationsType>, elGetter: __utils.ASN1Encoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ParameterType(value.parameters, __utils.BER),
            /* IF_ABSENT  */ ((value.supportedOperations === undefined) ? undefined : _encode_OperationsType(value.supportedOperations, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export type KeyInfo<ParameterType, OperationsType> =
    { reference: Reference }
    | { paramsAndOps: KeyInfo_paramsAndOps<ParameterType, OperationsType> };
export const _get_decoder_for_KeyInfo = function <ParameterType, OperationsType>(_decode_ParameterType: __utils.ASN1Decoder<ParameterType>, _decode_OperationsType: __utils.ASN1Decoder<OperationsType>) {
return __utils._decode_inextensible_choice<KeyInfo<ParameterType, OperationsType>>({
    "UNIVERSAL 2": [ "reference", _decode_Reference ],
    "UNIVERSAL 16": [ "paramsAndOps", _get_decoder_for_KeyInfo_paramsAndOps<ParameterType, OperationsType>(_decode_ParameterType, _decode_OperationsType) ],
})
}
export const _get_encoder_for_KeyInfo = function <ParameterType, OperationsType>(_encode_ParameterType: __utils.ASN1Encoder<ParameterType>, _encode_OperationsType: __utils.ASN1Encoder<OperationsType>) {
return __utils._encode_choice<KeyInfo<ParameterType, OperationsType>>({
    "reference": _encode_Reference,
    "paramsAndOps": _get_encoder_for_KeyInfo_paramsAndOps<ParameterType, OperationsType>(_encode_ParameterType, _encode_OperationsType),
}, __utils.BER)
}


export type PublicKeyOperations = Operations; // DefinedType
export const _decode_PublicKeyOperations = _decode_Operations;
export const _encode_PublicKeyOperations = _encode_Operations;


export class PrivateRSAKeyAttributes {
    constructor (
        readonly value: ObjectValue<RSAPrivateKeyObject>,
        readonly modulusLength: asn1.INTEGER,
        readonly keyInfo: KeyInfo<asn1.NULL, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("modulusLength", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PrivateRSAKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PrivateRSAKeyAttributes = function (el: asn1.ASN1Element): PrivateRSAKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<RSAPrivateKeyObject>;
    let modulusLength!: asn1.INTEGER;
    let keyInfo: asn1.OPTIONAL<KeyInfo<asn1.NULL, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<RSAPrivateKeyObject>(_decode_RSAPrivateKeyObject)(_el); },
        "modulusLength": (_el: asn1.ASN1Element): void => { modulusLength = __utils._decodeInteger(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<asn1.NULL, PublicKeyOperations>(__utils._decodeNull, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes,
        _extension_additions_list_spec_for_PrivateRSAKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateRSAKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        modulusLength,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PrivateRSAKeyAttributes = function (value: PrivateRSAKeyAttributes, elGetter: __utils.ASN1Encoder<PrivateRSAKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<RSAPrivateKeyObject>(_encode_RSAPrivateKeyObject)(value.value, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.modulusLength, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<asn1.NULL, PublicKeyOperations>(__utils._encodeNull, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ECPrivateKey = asn1.INTEGER;
export const _decode_ECPrivateKey = __utils._decodeInteger;
export const _encode_ECPrivateKey = __utils._encodeInteger;


export class PrivateECKeyAttributes {
    constructor (
        readonly value: ObjectValue<ECPrivateKey>,
        readonly keyInfo: KeyInfo<Parameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PrivateECKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateECKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PrivateECKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PrivateECKeyAttributes = function (el: asn1.ASN1Element): PrivateECKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<ECPrivateKey>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<ECPrivateKey>(_decode_ECPrivateKey)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<Parameters, PublicKeyOperations>(_decode_Parameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateECKeyAttributes,
        _extension_additions_list_spec_for_PrivateECKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateECKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateECKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PrivateECKeyAttributes = function (value: PrivateECKeyAttributes, elGetter: __utils.ASN1Encoder<PrivateECKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<ECPrivateKey>(_encode_ECPrivateKey)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<Parameters, PublicKeyOperations>(_encode_Parameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DHPrivateKey = asn1.INTEGER;
export const _decode_DHPrivateKey = __utils._decodeInteger;
export const _encode_DHPrivateKey = __utils._encodeInteger;


export class PrivateDHKeyAttributes {
    constructor (
        readonly value: ObjectValue<DHPrivateKey>,
        readonly keyInfo: KeyInfo<DomainParameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PrivateDHKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateDHKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PrivateDHKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PrivateDHKeyAttributes = function (el: asn1.ASN1Element): PrivateDHKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<DHPrivateKey>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<DHPrivateKey>(_decode_DHPrivateKey)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateDHKeyAttributes,
        _extension_additions_list_spec_for_PrivateDHKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateDHKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateDHKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PrivateDHKeyAttributes = function (value: PrivateDHKeyAttributes, elGetter: __utils.ASN1Encoder<PrivateDHKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<DHPrivateKey>(_encode_DHPrivateKey)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DSAPrivateKey = asn1.INTEGER;
export const _decode_DSAPrivateKey = __utils._decodeInteger;
export const _encode_DSAPrivateKey = __utils._encodeInteger;


export class PrivateDSAKeyAttributes {
    constructor (
        readonly value: ObjectValue<DSAPrivateKey>,
        readonly keyInfo: KeyInfo<DomainParameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PrivateDSAKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PrivateDSAKeyAttributes = function (el: asn1.ASN1Element): PrivateDSAKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<DSAPrivateKey>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<DSAPrivateKey>(_decode_DSAPrivateKey)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes,
        _extension_additions_list_spec_for_PrivateDSAKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateDSAKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PrivateDSAKeyAttributes = function (value: PrivateDSAKeyAttributes, elGetter: __utils.ASN1Encoder<PrivateDSAKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<DSAPrivateKey>(_encode_DSAPrivateKey)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KEAPrivateKey = asn1.INTEGER;
export const _decode_KEAPrivateKey = __utils._decodeInteger;
export const _encode_KEAPrivateKey = __utils._encodeInteger;


export class PrivateKEAKeyAttributes {
    constructor (
        readonly value: ObjectValue<KEAPrivateKey>,
        readonly keyInfo: KeyInfo<DomainParameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PrivateKEAKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateKEAKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PrivateKEAKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PrivateKEAKeyAttributes = function (el: asn1.ASN1Element): PrivateKEAKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<KEAPrivateKey>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<KEAPrivateKey>(_decode_KEAPrivateKey)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateKEAKeyAttributes,
        _extension_additions_list_spec_for_PrivateKEAKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateKEAKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateKEAKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PrivateKEAKeyAttributes = function (value: PrivateKEAKeyAttributes, elGetter: __utils.ASN1Encoder<PrivateKEAKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<KEAPrivateKey>(_encode_KEAPrivateKey)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PrivateKeyType =
    { privateRSAKey: PrivateKeyObject<PrivateRSAKeyAttributes> }
    | { privateECKey: PrivateKeyObject<PrivateECKeyAttributes> }
    | { privateDHKey: PrivateKeyObject<PrivateDHKeyAttributes> }
    | { privateDSAKey: PrivateKeyObject<PrivateDSAKeyAttributes> }
    | { privateKEAKey: PrivateKeyObject<PrivateKEAKeyAttributes> }
    | asn1.ASN1Element;
export const _decode_PrivateKeyType = __utils._decode_extensible_choice<PrivateKeyType>({
    "UNIVERSAL 16": [ "privateRSAKey", _get_decoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(_decode_PrivateRSAKeyAttributes) ],
    "CONTEXT 0": [ "privateECKey", __utils._decode_implicit<PrivateKeyObject<PrivateECKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateECKeyAttributes>(_decode_PrivateECKeyAttributes)) ],
    "CONTEXT 1": [ "privateDHKey", __utils._decode_implicit<PrivateKeyObject<PrivateDHKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(_decode_PrivateDHKeyAttributes)) ],
    "CONTEXT 2": [ "privateDSAKey", __utils._decode_implicit<PrivateKeyObject<PrivateDSAKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(_decode_PrivateDSAKeyAttributes)) ],
    "CONTEXT 3": [ "privateKEAKey", __utils._decode_implicit<PrivateKeyObject<PrivateKEAKeyAttributes>>(() => _get_decoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(_decode_PrivateKEAKeyAttributes)) ]
});
export const _encode_PrivateKeyType = __utils._encode_choice<PrivateKeyType>({
    "privateRSAKey": _get_encoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(_encode_PrivateRSAKeyAttributes),
    "privateECKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_PrivateKeyObject<PrivateECKeyAttributes>(_encode_PrivateECKeyAttributes), __utils.BER),
    "privateDHKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(_encode_PrivateDHKeyAttributes), __utils.BER),
    "privateDSAKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(_encode_PrivateDSAKeyAttributes), __utils.BER),
    "privateKEAKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _get_encoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(_encode_PrivateKEAKeyAttributes), __utils.BER),
}, __utils.BER);


export type PrivateKeys = PathOrObjects<PrivateKeyType>; // DefinedType
export const _decode_PrivateKeys = _get_decoder_for_PathOrObjects<PrivateKeyType>(_decode_PrivateKeyType);
export const _encode_PrivateKeys = _get_encoder_for_PathOrObjects<PrivateKeyType>(_encode_PrivateKeyType);


export class Usage {
    constructor (
        readonly keyUsage: KeyUsage | undefined,
        readonly extKeyUsage: asn1.OBJECT_IDENTIFIER[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Usage: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyUsage", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("extKeyUsage", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Usage: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_Usage: __utils.ComponentSpec[] = [

];

export const _decode_Usage = function (el: asn1.ASN1Element): Usage {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyUsage: asn1.OPTIONAL<KeyUsage>;
    let extKeyUsage: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "keyUsage": (_el: asn1.ASN1Element): void => { keyUsage = _decode_KeyUsage(_el); },
        "extKeyUsage": (_el: asn1.ASN1Element): void => { extKeyUsage = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Usage,
        _extension_additions_list_spec_for_Usage,
        _root_component_type_list_2_spec_for_Usage,
        undefined,
    );
    return new Usage( /* SEQUENCE_CONSTRUCTOR_CALL */
        keyUsage,
        extKeyUsage
    );
};
export const _encode_Usage = function (value: Usage, elGetter: __utils.ASN1Encoder<Usage>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyUsage === undefined) ? undefined : _encode_KeyUsage(value.keyUsage, __utils.BER)),
            /* IF_ABSENT  */ ((value.extKeyUsage === undefined) ? undefined : __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER)(value.extKeyUsage, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CommonPublicKeyAttributes {
    constructor (
        readonly subjectName: Name | undefined,
        readonly trustedUsage: Usage | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonPublicKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("subjectName", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonPublicKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonPublicKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("trustedUsage", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];

export const _decode_CommonPublicKeyAttributes = function (el: asn1.ASN1Element): CommonPublicKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subjectName: asn1.OPTIONAL<Name>;
    let trustedUsage: asn1.OPTIONAL<Usage>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "subjectName": (_el: asn1.ASN1Element): void => { subjectName = _decode_Name(_el); },
        "trustedUsage": (_el: asn1.ASN1Element): void => { trustedUsage = __utils._decode_implicit<Usage>(() => _decode_Usage)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonPublicKeyAttributes,
        _extension_additions_list_spec_for_CommonPublicKeyAttributes,
        _root_component_type_list_2_spec_for_CommonPublicKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonPublicKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        subjectName,
        trustedUsage,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonPublicKeyAttributes = function (value: CommonPublicKeyAttributes, elGetter: __utils.ASN1Encoder<CommonPublicKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.subjectName === undefined) ? undefined : _encode_Name(value.subjectName, __utils.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.trustedUsage === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Usage, __utils.BER)(value.trustedUsage, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PublicKeyObject<KeyAttributes> = PKCS15Object<CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes>; // DefinedType
export const _get_decoder_for_PublicKeyObject = function <KeyAttributes>(_decode_KeyAttributes: __utils.ASN1Decoder<KeyAttributes>) {
return _get_decoder_for_PKCS15Object<CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes>(_decode_CommonKeyAttributes, _decode_CommonPublicKeyAttributes, _decode_KeyAttributes)
}
export const _get_encoder_for_PublicKeyObject = function <KeyAttributes>(_encode_KeyAttributes: __utils.ASN1Encoder<KeyAttributes>) {
return _get_encoder_for_PKCS15Object<CommonKeyAttributes, CommonPublicKeyAttributes, KeyAttributes>(_encode_CommonKeyAttributes, _encode_CommonPublicKeyAttributes, _encode_KeyAttributes)
}


export type RSAPublicKeyChoice =
    { raw: RSAPublicKey }
    | { spki: SubjectPublicKeyInfo }
    | asn1.ASN1Element;
export const _decode_RSAPublicKeyChoice = __utils._decode_extensible_choice<RSAPublicKeyChoice>({
    "UNIVERSAL 16": [ "raw", _decode_RSAPublicKey ],
    "CONTEXT 1": [ "spki", __utils._decode_implicit<SubjectPublicKeyInfo>(() => _decode_SubjectPublicKeyInfo) ]
});
export const _encode_RSAPublicKeyChoice = __utils._encode_choice<RSAPublicKeyChoice>({
    "raw": _encode_RSAPublicKey,
    "spki": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SubjectPublicKeyInfo, __utils.BER),
}, __utils.BER);


export class PublicRSAKeyAttributes {
    constructor (
        readonly value: ObjectValue<RSAPublicKeyChoice>,
        readonly modulusLength: asn1.INTEGER,
        readonly keyInfo: KeyInfo<asn1.NULL, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicRSAKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("modulusLength", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PublicRSAKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PublicRSAKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PublicRSAKeyAttributes = function (el: asn1.ASN1Element): PublicRSAKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<RSAPublicKeyChoice>;
    let modulusLength!: asn1.INTEGER;
    let keyInfo: asn1.OPTIONAL<KeyInfo<asn1.NULL, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<RSAPublicKeyChoice>(_decode_RSAPublicKeyChoice)(_el); },
        "modulusLength": (_el: asn1.ASN1Element): void => { modulusLength = __utils._decodeInteger(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<asn1.NULL, PublicKeyOperations>(__utils._decodeNull, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PublicRSAKeyAttributes,
        _extension_additions_list_spec_for_PublicRSAKeyAttributes,
        _root_component_type_list_2_spec_for_PublicRSAKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PublicRSAKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        modulusLength,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PublicRSAKeyAttributes = function (value: PublicRSAKeyAttributes, elGetter: __utils.ASN1Encoder<PublicRSAKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<RSAPublicKeyChoice>(_encode_RSAPublicKeyChoice)(value.value, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.modulusLength, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<asn1.NULL, PublicKeyOperations>(__utils._encodeNull, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ECPublicKeyChoice =
    { raw: ECPoint }
    | { spki: SubjectPublicKeyInfo }
    | asn1.ASN1Element;
export const _decode_ECPublicKeyChoice = __utils._decode_extensible_choice<ECPublicKeyChoice>({
    "UNIVERSAL 4": [ "raw", _decode_ECPoint ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
});
export const _encode_ECPublicKeyChoice = __utils._encode_choice<ECPublicKeyChoice>({
    "raw": _encode_ECPoint,
    "spki": _encode_SubjectPublicKeyInfo,
}, __utils.BER);


export class PublicECKeyAttributes {
    constructor (
        readonly value: ObjectValue<ECPublicKeyChoice>,
        readonly keyInfo: KeyInfo<Parameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicECKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PublicECKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PublicECKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PublicECKeyAttributes = function (el: asn1.ASN1Element): PublicECKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<ECPublicKeyChoice>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<ECPublicKeyChoice>(_decode_ECPublicKeyChoice)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<Parameters, PublicKeyOperations>(_decode_Parameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PublicECKeyAttributes,
        _extension_additions_list_spec_for_PublicECKeyAttributes,
        _root_component_type_list_2_spec_for_PublicECKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PublicECKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PublicECKeyAttributes = function (value: PublicECKeyAttributes, elGetter: __utils.ASN1Encoder<PublicECKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<ECPublicKeyChoice>(_encode_ECPublicKeyChoice)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<Parameters, PublicKeyOperations>(_encode_Parameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DHPublicKeyChoice =
    { raw: DiffieHellmanPublicNumber }
    | { spki: SubjectPublicKeyInfo }
    | asn1.ASN1Element;
export const _decode_DHPublicKeyChoice = __utils._decode_extensible_choice<DHPublicKeyChoice>({
    "UNIVERSAL 2": [ "raw", _decode_DiffieHellmanPublicNumber ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
});
export const _encode_DHPublicKeyChoice = __utils._encode_choice<DHPublicKeyChoice>({
    "raw": _encode_DiffieHellmanPublicNumber,
    "spki": _encode_SubjectPublicKeyInfo,
}, __utils.BER);


export class PublicDHKeyAttributes {
    constructor (
        readonly value: ObjectValue<DHPublicKeyChoice>,
        readonly keyInfo: KeyInfo<DomainParameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicDHKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PublicDHKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PublicDHKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PublicDHKeyAttributes = function (el: asn1.ASN1Element): PublicDHKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<DHPublicKeyChoice>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<DHPublicKeyChoice>(_decode_DHPublicKeyChoice)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PublicDHKeyAttributes,
        _extension_additions_list_spec_for_PublicDHKeyAttributes,
        _root_component_type_list_2_spec_for_PublicDHKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PublicDHKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PublicDHKeyAttributes = function (value: PublicDHKeyAttributes, elGetter: __utils.ASN1Encoder<PublicDHKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<DHPublicKeyChoice>(_encode_DHPublicKeyChoice)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DSAPublicKeyChoice =
    { raw: asn1.INTEGER }
    | { spki: SubjectPublicKeyInfo }
    | asn1.ASN1Element;
export const _decode_DSAPublicKeyChoice = __utils._decode_extensible_choice<DSAPublicKeyChoice>({
    "UNIVERSAL 2": [ "raw", __utils._decodeInteger ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
});
export const _encode_DSAPublicKeyChoice = __utils._encode_choice<DSAPublicKeyChoice>({
    "raw": __utils._encodeInteger,
    "spki": _encode_SubjectPublicKeyInfo,
}, __utils.BER);


export class PublicDSAKeyAttributes {
    constructor (
        readonly value: ObjectValue<DSAPublicKeyChoice>,
        readonly keyInfo: KeyInfo<DomainParameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicDSAKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PublicDSAKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PublicDSAKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PublicDSAKeyAttributes = function (el: asn1.ASN1Element): PublicDSAKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<DSAPublicKeyChoice>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<DSAPublicKeyChoice>(_decode_DSAPublicKeyChoice)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PublicDSAKeyAttributes,
        _extension_additions_list_spec_for_PublicDSAKeyAttributes,
        _root_component_type_list_2_spec_for_PublicDSAKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PublicDSAKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PublicDSAKeyAttributes = function (value: PublicDSAKeyAttributes, elGetter: __utils.ASN1Encoder<PublicDSAKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<DSAPublicKeyChoice>(_encode_DSAPublicKeyChoice)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type KEAPublicKeyChoice =
    { raw: asn1.INTEGER }
    | { spki: SubjectPublicKeyInfo }
    | asn1.ASN1Element;
export const _decode_KEAPublicKeyChoice = __utils._decode_extensible_choice<KEAPublicKeyChoice>({
    "UNIVERSAL 2": [ "raw", __utils._decodeInteger ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
});
export const _encode_KEAPublicKeyChoice = __utils._encode_choice<KEAPublicKeyChoice>({
    "raw": __utils._encodeInteger,
    "spki": _encode_SubjectPublicKeyInfo,
}, __utils.BER);


export class PublicKEAKeyAttributes {
    constructor (
        readonly value: ObjectValue<KEAPublicKeyChoice>,
        readonly keyInfo: KeyInfo<DomainParameters, PublicKeyOperations> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicKEAKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyInfo", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PublicKEAKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PublicKEAKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PublicKEAKeyAttributes = function (el: asn1.ASN1Element): PublicKEAKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<KEAPublicKeyChoice>;
    let keyInfo: asn1.OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<KEAPublicKeyChoice>(_decode_KEAPublicKeyChoice)(_el); },
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PublicKEAKeyAttributes,
        _extension_additions_list_spec_for_PublicKEAKeyAttributes,
        _root_component_type_list_2_spec_for_PublicKEAKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PublicKEAKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_PublicKEAKeyAttributes = function (value: PublicKEAKeyAttributes, elGetter: __utils.ASN1Encoder<PublicKEAKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<KEAPublicKeyChoice>(_encode_KEAPublicKeyChoice)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PublicKeyType =
    { publicRSAKey: PublicKeyObject<PublicRSAKeyAttributes> }
    | { publicECKey: PublicKeyObject<PublicECKeyAttributes> }
    | { publicDHKey: PublicKeyObject<PublicDHKeyAttributes> }
    | { publicDSAKey: PublicKeyObject<PublicDSAKeyAttributes> }
    | { publicKEAKey: PublicKeyObject<PublicKEAKeyAttributes> }
    | asn1.ASN1Element;
export const _decode_PublicKeyType = __utils._decode_extensible_choice<PublicKeyType>({
    "UNIVERSAL 16": [ "publicRSAKey", _get_decoder_for_PublicKeyObject<PublicRSAKeyAttributes>(_decode_PublicRSAKeyAttributes) ],
    "CONTEXT 0": [ "publicECKey", __utils._decode_implicit<PublicKeyObject<PublicECKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicECKeyAttributes>(_decode_PublicECKeyAttributes)) ],
    "CONTEXT 1": [ "publicDHKey", __utils._decode_implicit<PublicKeyObject<PublicDHKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicDHKeyAttributes>(_decode_PublicDHKeyAttributes)) ],
    "CONTEXT 2": [ "publicDSAKey", __utils._decode_implicit<PublicKeyObject<PublicDSAKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicDSAKeyAttributes>(_decode_PublicDSAKeyAttributes)) ],
    "CONTEXT 3": [ "publicKEAKey", __utils._decode_implicit<PublicKeyObject<PublicKEAKeyAttributes>>(() => _get_decoder_for_PublicKeyObject<PublicKEAKeyAttributes>(_decode_PublicKEAKeyAttributes)) ]
});
export const _encode_PublicKeyType = __utils._encode_choice<PublicKeyType>({
    "publicRSAKey": _get_encoder_for_PublicKeyObject<PublicRSAKeyAttributes>(_encode_PublicRSAKeyAttributes),
    "publicECKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_PublicKeyObject<PublicECKeyAttributes>(_encode_PublicECKeyAttributes), __utils.BER),
    "publicDHKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_PublicKeyObject<PublicDHKeyAttributes>(_encode_PublicDHKeyAttributes), __utils.BER),
    "publicDSAKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_PublicKeyObject<PublicDSAKeyAttributes>(_encode_PublicDSAKeyAttributes), __utils.BER),
    "publicKEAKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _get_encoder_for_PublicKeyObject<PublicKEAKeyAttributes>(_encode_PublicKEAKeyAttributes), __utils.BER),
}, __utils.BER);


export type PublicKeys = PathOrObjects<PublicKeyType>; // DefinedType
export const _decode_PublicKeys = _get_decoder_for_PathOrObjects<PublicKeyType>(_decode_PublicKeyType);
export const _encode_PublicKeys = _get_encoder_for_PathOrObjects<PublicKeyType>(_encode_PublicKeyType);


export class CommonSecretKeyAttributes {
    constructor (
        readonly keyLen: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonSecretKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyLen", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonSecretKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonSecretKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_CommonSecretKeyAttributes = function (el: asn1.ASN1Element): CommonSecretKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyLen: asn1.OPTIONAL<asn1.INTEGER>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "keyLen": (_el: asn1.ASN1Element): void => { keyLen = __utils._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonSecretKeyAttributes,
        _extension_additions_list_spec_for_CommonSecretKeyAttributes,
        _root_component_type_list_2_spec_for_CommonSecretKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonSecretKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        keyLen,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonSecretKeyAttributes = function (value: CommonSecretKeyAttributes, elGetter: __utils.ASN1Encoder<CommonSecretKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyLen === undefined) ? undefined : __utils._encodeInteger(value.keyLen, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SecretKeyObject<KeyAttributes> = PKCS15Object<CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes>; // DefinedType
export const _get_decoder_for_SecretKeyObject = function <KeyAttributes>(_decode_KeyAttributes: __utils.ASN1Decoder<KeyAttributes>) {
return _get_decoder_for_PKCS15Object<CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes>(_decode_CommonKeyAttributes, _decode_CommonSecretKeyAttributes, _decode_KeyAttributes)
}
export const _get_encoder_for_SecretKeyObject = function <KeyAttributes>(_encode_KeyAttributes: __utils.ASN1Encoder<KeyAttributes>) {
return _get_encoder_for_PKCS15Object<CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes>(_encode_CommonKeyAttributes, _encode_CommonSecretKeyAttributes, _encode_KeyAttributes)
}


export class GenericSecretKeyAttributes {
    constructor (
        readonly value: ObjectValue<asn1.OCTET_STRING>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_GenericSecretKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_GenericSecretKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_GenericSecretKeyAttributes: __utils.ComponentSpec[] = [

];

export const _decode_GenericSecretKeyAttributes = function (el: asn1.ASN1Element): GenericSecretKeyAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("GenericSecretKeyAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    let value!: ObjectValue<asn1.OCTET_STRING>;
    value = _get_decoder_for_ObjectValue<asn1.OCTET_STRING>(__utils._decodeOctetString)(sequence[0]);
    // TODO: Validate values.
    return new GenericSecretKeyAttributes(
        value,
        sequence.slice(1),
    );
};
export const _encode_GenericSecretKeyAttributes = function (value: GenericSecretKeyAttributes, elGetter: __utils.ASN1Encoder<GenericSecretKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.OCTET_STRING>(__utils._encodeOctetString)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class OtherKey {
    constructor (
        readonly keyType: asn1.OBJECT_IDENTIFIER,
        readonly keyAttr: SecretKeyObject<GenericSecretKeyAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("keyAttr", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherKey: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_OtherKey: __utils.ComponentSpec[] = [

];

export const _decode_OtherKey = function (el: asn1.ASN1Element): OtherKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OtherKey contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "keyType";
    sequence[1].name = "keyAttr";
    let keyType!: asn1.OBJECT_IDENTIFIER;
    let keyAttr!: SecretKeyObject<GenericSecretKeyAttributes>;
    keyType = __utils._decodeObjectIdentifier(sequence[0]);
    keyAttr = _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)(sequence[1]);
    // TODO: Validate values.
    return new OtherKey(
        keyType,
        keyAttr,

    );
};
export const _encode_OtherKey = function (value: OtherKey, elGetter: __utils.ASN1Encoder<OtherKey>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.keyType, __utils.BER),
            /* REQUIRED   */ _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes)(value.keyAttr, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SecretKeyType =
    { genericSecretKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { rc2key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { rc4key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { desKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { des2Key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { des3Key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { castKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { cast3Key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { cast128Key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { rc5Key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { ideaKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { skipjackKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { batonKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { juniperKey: SecretKeyObject<GenericSecretKeyAttributes> }
    | { rc6Key: SecretKeyObject<GenericSecretKeyAttributes> }
    | { otherKey: OtherKey }
    | asn1.ASN1Element;
export const _decode_SecretKeyType = __utils._decode_extensible_choice<SecretKeyType>({
    "UNIVERSAL 16": [ "genericSecretKey", _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes) ],
    "CONTEXT 0": [ "rc2key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 1": [ "rc4key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 2": [ "desKey", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 3": [ "des2Key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 4": [ "des3Key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 5": [ "castKey", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 6": [ "cast3Key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 7": [ "cast128Key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 8": [ "rc5Key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 9": [ "ideaKey", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 10": [ "skipjackKey", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 11": [ "batonKey", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 12": [ "juniperKey", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 13": [ "rc6Key", __utils._decode_implicit<SecretKeyObject<GenericSecretKeyAttributes>>(() => _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_decode_GenericSecretKeyAttributes)) ],
    "CONTEXT 14": [ "otherKey", __utils._decode_implicit<OtherKey>(() => _decode_OtherKey) ]
});
export const _encode_SecretKeyType = __utils._encode_choice<SecretKeyType>({
    "genericSecretKey": _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes),
    "rc2key": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "rc4key": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "desKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "des2Key": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "des3Key": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "castKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "cast3Key": __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "cast128Key": __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "rc5Key": __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "ideaKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 9, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "skipjackKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 10, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "batonKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 11, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "juniperKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 12, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "rc6Key": __utils._encode_implicit(asn1.ASN1TagClass.context, 13, () => _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(_encode_GenericSecretKeyAttributes), __utils.BER),
    "otherKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 14, () => _encode_OtherKey, __utils.BER),
}, __utils.BER);


export type SecretKeys = PathOrObjects<SecretKeyType>; // DefinedType
export const _decode_SecretKeys = _get_decoder_for_PathOrObjects<SecretKeyType>(_decode_SecretKeyType);
export const _encode_SecretKeys = _get_encoder_for_PathOrObjects<SecretKeyType>(_encode_SecretKeyType);


export class CommonCertificateAttributes {
    constructor (
        readonly iD: Identifier,
        readonly authority: asn1.BOOLEAN | undefined,
        readonly identifier: CredentialIdentifier | undefined,
        readonly certHash: OOBCertHash | undefined,
        readonly trustedUsage: Usage | undefined,
        readonly identifiers: CredentialIdentifier[] | undefined,
        readonly implicitTrust: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonCertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("iD", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("authority", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("identifier", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    /* FIXME: certHash COULD_NOT_RESOLVE_TYPE_DEF */
];
export const _root_component_type_list_2_spec_for_CommonCertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonCertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("trustedUsage", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("identifiers", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("implicitTrust", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _default_value_for_CommonCertificateAttributes__authority = false;
export const _default_value_for_CommonCertificateAttributes__implicitTrust = false;
export const _decode_CommonCertificateAttributes = function (el: asn1.ASN1Element): CommonCertificateAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let iD!: Identifier;
    let authority: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_CommonCertificateAttributes__authority;
    let identifier: asn1.OPTIONAL<CredentialIdentifier>;
    let certHash: asn1.OPTIONAL<OOBCertHash>;
    let trustedUsage: asn1.OPTIONAL<Usage>;
    let identifiers: asn1.OPTIONAL<CredentialIdentifier[]>;
    let implicitTrust: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_CommonCertificateAttributes__implicitTrust;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "iD": (_el: asn1.ASN1Element): void => { iD = _decode_Identifier(_el); },
        "authority": (_el: asn1.ASN1Element): void => { authority = __utils._decodeBoolean(_el); },
        "identifier": (_el: asn1.ASN1Element): void => { identifier = _decode_CredentialIdentifier(_el); },
        "certHash": (_el: asn1.ASN1Element): void => { certHash = __utils._decode_implicit<OOBCertHash>(() => _decode_OOBCertHash)(_el); },
        "trustedUsage": (_el: asn1.ASN1Element): void => { trustedUsage = __utils._decode_implicit<Usage>(() => _decode_Usage)(_el); },
        "identifiers": (_el: asn1.ASN1Element): void => { identifiers = __utils._decode_implicit<CredentialIdentifier[]>(() => __utils._decodeSequenceOf<CredentialIdentifier>(() => _decode_CredentialIdentifier))(_el); },
        "implicitTrust": (_el: asn1.ASN1Element): void => { implicitTrust = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonCertificateAttributes,
        _extension_additions_list_spec_for_CommonCertificateAttributes,
        _root_component_type_list_2_spec_for_CommonCertificateAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonCertificateAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        iD,
        authority,
        identifier,
        certHash,
        trustedUsage,
        identifiers,
        implicitTrust,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonCertificateAttributes = function (value: CommonCertificateAttributes, elGetter: __utils.ASN1Encoder<CommonCertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identifier(value.iD, __utils.BER),
            /* IF_DEFAULT */ (value.authority === undefined || __utils.deepEq(value.authority, _default_value_for_CommonCertificateAttributes__authority) ? undefined : __utils._encodeBoolean(value.authority, __utils.BER)),
            /* IF_ABSENT  */ ((value.identifier === undefined) ? undefined : _encode_CredentialIdentifier(value.identifier, __utils.BER)),
            /* IF_ABSENT  */ ((value.certHash === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_OOBCertHash, __utils.BER)(value.certHash, __utils.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.trustedUsage === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Usage, __utils.BER)(value.trustedUsage, __utils.BER)),
            /* IF_ABSENT  */ ((value.identifiers === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<CredentialIdentifier>(() => _encode_CredentialIdentifier, __utils.BER), __utils.BER)(value.identifiers, __utils.BER)),
            /* IF_DEFAULT */ (value.implicitTrust === undefined || __utils.deepEq(value.implicitTrust, _default_value_for_CommonCertificateAttributes__implicitTrust) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeBoolean, __utils.BER)(value.implicitTrust, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type CertificateObject<CertAttributes> = PKCS15Object<CommonCertificateAttributes, asn1.NULL, CertAttributes>; // DefinedType
export const _get_decoder_for_CertificateObject = function <CertAttributes>(_decode_CertAttributes: __utils.ASN1Decoder<CertAttributes>) {
return _get_decoder_for_PKCS15Object<CommonCertificateAttributes, asn1.NULL, CertAttributes>(_decode_CommonCertificateAttributes, __utils._decodeNull, _decode_CertAttributes)
}
export const _get_encoder_for_CertificateObject = function <CertAttributes>(_encode_CertAttributes: __utils.ASN1Encoder<CertAttributes>) {
return _get_encoder_for_PKCS15Object<CommonCertificateAttributes, asn1.NULL, CertAttributes>(_encode_CommonCertificateAttributes, __utils._encodeNull, _encode_CertAttributes)
}


export class X509CertificateAttributes {
    constructor (
        readonly value: ObjectValue<Certificate>,
        readonly subject: Name | undefined,
        readonly issuer: Name | undefined,
        readonly serialNumber: CertificateSerialNumber | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_X509CertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("subject", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_X509CertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_X509CertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_X509CertificateAttributes = function (el: asn1.ASN1Element): X509CertificateAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<Certificate>;
    let subject: asn1.OPTIONAL<Name>;
    let issuer: asn1.OPTIONAL<Name>;
    let serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<Certificate>(_decode_Certificate)(_el); },
        "subject": (_el: asn1.ASN1Element): void => { subject = _decode_Name(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = __utils._decode_implicit<Name>(() => _decode_Name)(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_X509CertificateAttributes,
        _extension_additions_list_spec_for_X509CertificateAttributes,
        _root_component_type_list_2_spec_for_X509CertificateAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new X509CertificateAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        subject,
        issuer,
        serialNumber,
        _unrecognizedExtensionsList
    );
};
export const _encode_X509CertificateAttributes = function (value: X509CertificateAttributes, elGetter: __utils.ASN1Encoder<X509CertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<Certificate>(_encode_Certificate)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : _encode_Name(value.subject, __utils.BER)),
            /* IF_ABSENT  */ ((value.issuer === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.issuer, __utils.BER)),
            /* IF_ABSENT  */ ((value.serialNumber === undefined) ? undefined : _encode_CertificateSerialNumber(value.serialNumber, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class X509AttributeCertificateAttributes {
    constructor (
        readonly value: ObjectValue<AttributeCertificate>,
        readonly issuer: GeneralNames | undefined,
        readonly serialNumber: CertificateSerialNumber | undefined,
        readonly attrTypes: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_X509AttributeCertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("attrTypes", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_X509AttributeCertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_X509AttributeCertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_X509AttributeCertificateAttributes = function (el: asn1.ASN1Element): X509AttributeCertificateAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let value!: ObjectValue<AttributeCertificate>;
    let issuer: asn1.OPTIONAL<GeneralNames>;
    let serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    let attrTypes: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "value": (_el: asn1.ASN1Element): void => { value = _get_decoder_for_ObjectValue<AttributeCertificate>(_decode_AttributeCertificate)(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_GeneralNames(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "attrTypes": (_el: asn1.ASN1Element): void => { attrTypes = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_X509AttributeCertificateAttributes,
        _extension_additions_list_spec_for_X509AttributeCertificateAttributes,
        _root_component_type_list_2_spec_for_X509AttributeCertificateAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new X509AttributeCertificateAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        value,
        issuer,
        serialNumber,
        attrTypes,
        _unrecognizedExtensionsList
    );
};
export const _encode_X509AttributeCertificateAttributes = function (value: X509AttributeCertificateAttributes, elGetter: __utils.ASN1Encoder<X509AttributeCertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<AttributeCertificate>(_encode_AttributeCertificate)(value.value, __utils.BER),
            /* IF_ABSENT  */ ((value.issuer === undefined) ? undefined : _encode_GeneralNames(value.issuer, __utils.BER)),
            /* IF_ABSENT  */ ((value.serialNumber === undefined) ? undefined : _encode_CertificateSerialNumber(value.serialNumber, __utils.BER)),
            /* IF_ABSENT  */ ((value.attrTypes === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.attrTypes, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKICertificateAttributes {
    constructor (
        readonly value: ObjectValue<asn1.ASN1Element>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SPKICertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SPKICertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SPKICertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_SPKICertificateAttributes = function (el: asn1.ASN1Element): SPKICertificateAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("SPKICertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    let value!: ObjectValue<asn1.ASN1Element>;
    value = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny)(sequence[0]);
    // TODO: Validate values.
    return new SPKICertificateAttributes(
        value,
        sequence.slice(1),
    );
};
export const _encode_SPKICertificateAttributes = function (value: SPKICertificateAttributes, elGetter: __utils.ASN1Encoder<SPKICertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class PGPCertificateAttributes {
    constructor (
        readonly value: ObjectValue<asn1.ASN1Element>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PGPCertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PGPCertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PGPCertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_PGPCertificateAttributes = function (el: asn1.ASN1Element): PGPCertificateAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("PGPCertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    let value!: ObjectValue<asn1.ASN1Element>;
    value = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny)(sequence[0]);
    // TODO: Validate values.
    return new PGPCertificateAttributes(
        value,
        sequence.slice(1),
    );
};
export const _encode_PGPCertificateAttributes = function (value: PGPCertificateAttributes, elGetter: __utils.ASN1Encoder<PGPCertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class WTLSCertificateAttributes {
    constructor (
        readonly value: ObjectValue<asn1.ASN1Element>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_WTLSCertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_WTLSCertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_WTLSCertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_WTLSCertificateAttributes = function (el: asn1.ASN1Element): WTLSCertificateAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("WTLSCertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    let value!: ObjectValue<asn1.ASN1Element>;
    value = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny)(sequence[0]);
    // TODO: Validate values.
    return new WTLSCertificateAttributes(
        value,
        sequence.slice(1),
    );
};
export const _encode_WTLSCertificateAttributes = function (value: WTLSCertificateAttributes, elGetter: __utils.ASN1Encoder<WTLSCertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class X9_68CertificateAttributes {
    constructor (
        readonly value: ObjectValue<asn1.ASN1Element>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_X9_68CertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_X9_68CertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_X9_68CertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_X9_68CertificateAttributes = function (el: asn1.ASN1Element): X9_68CertificateAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("X9-68CertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    let value!: ObjectValue<asn1.ASN1Element>;
    value = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny)(sequence[0]);
    // TODO: Validate values.
    return new X9_68CertificateAttributes(
        value,
        sequence.slice(1),
    );
};
export const _encode_X9_68CertificateAttributes = function (value: X9_68CertificateAttributes, elGetter: __utils.ASN1Encoder<X9_68CertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CVCertificateAttributes {
    constructor (
        readonly value: ObjectValue<asn1.ASN1Element>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CVCertificateAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CVCertificateAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CVCertificateAttributes: __utils.ComponentSpec[] = [

];

export const _decode_CVCertificateAttributes = function (el: asn1.ASN1Element): CVCertificateAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("CVCertificateAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    let value!: ObjectValue<asn1.ASN1Element>;
    value = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny)(sequence[0]);
    // TODO: Validate values.
    return new CVCertificateAttributes(
        value,
        sequence.slice(1),
    );
};
export const _encode_CVCertificateAttributes = function (value: CVCertificateAttributes, elGetter: __utils.ASN1Encoder<CVCertificateAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type CertificateType =
    { x509Certificate: CertificateObject<X509CertificateAttributes> }
    | { x509AttributeCertificate: CertificateObject<X509AttributeCertificateAttributes> }
    | { spkiCertificate: CertificateObject<SPKICertificateAttributes> }
    | { pgpCertificate: CertificateObject<PGPCertificateAttributes> }
    | { wtlsCertificate: CertificateObject<WTLSCertificateAttributes> }
    | { x9_68Certificate: CertificateObject<X9_68CertificateAttributes> }
    | { cvCertificate: CertificateObject<CVCertificateAttributes> }
    | asn1.ASN1Element;
export const _decode_CertificateType = __utils._decode_extensible_choice<CertificateType>({
    "UNIVERSAL 16": [ "x509Certificate", _get_decoder_for_CertificateObject<X509CertificateAttributes>(_decode_X509CertificateAttributes) ],
    "CONTEXT 0": [ "x509AttributeCertificate", __utils._decode_implicit<CertificateObject<X509AttributeCertificateAttributes>>(() => _get_decoder_for_CertificateObject<X509AttributeCertificateAttributes>(_decode_X509AttributeCertificateAttributes)) ],
    "CONTEXT 1": [ "spkiCertificate", __utils._decode_implicit<CertificateObject<SPKICertificateAttributes>>(() => _get_decoder_for_CertificateObject<SPKICertificateAttributes>(_decode_SPKICertificateAttributes)) ],
    "CONTEXT 2": [ "pgpCertificate", __utils._decode_implicit<CertificateObject<PGPCertificateAttributes>>(() => _get_decoder_for_CertificateObject<PGPCertificateAttributes>(_decode_PGPCertificateAttributes)) ],
    "CONTEXT 3": [ "wtlsCertificate", __utils._decode_implicit<CertificateObject<WTLSCertificateAttributes>>(() => _get_decoder_for_CertificateObject<WTLSCertificateAttributes>(_decode_WTLSCertificateAttributes)) ],
    "CONTEXT 4": [ "x9_68Certificate", __utils._decode_implicit<CertificateObject<X9_68CertificateAttributes>>(() => _get_decoder_for_CertificateObject<X9_68CertificateAttributes>(_decode_X9_68CertificateAttributes)) ],
    "CONTEXT 5": [ "cvCertificate", __utils._decode_implicit<CertificateObject<CVCertificateAttributes>>(() => _get_decoder_for_CertificateObject<CVCertificateAttributes>(_decode_CVCertificateAttributes)) ]
});
export const _encode_CertificateType = __utils._encode_choice<CertificateType>({
    "x509Certificate": _get_encoder_for_CertificateObject<X509CertificateAttributes>(_encode_X509CertificateAttributes),
    "x509AttributeCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_CertificateObject<X509AttributeCertificateAttributes>(_encode_X509AttributeCertificateAttributes), __utils.BER),
    "spkiCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_CertificateObject<SPKICertificateAttributes>(_encode_SPKICertificateAttributes), __utils.BER),
    "pgpCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_CertificateObject<PGPCertificateAttributes>(_encode_PGPCertificateAttributes), __utils.BER),
    "wtlsCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _get_encoder_for_CertificateObject<WTLSCertificateAttributes>(_encode_WTLSCertificateAttributes), __utils.BER),
    "x9_68Certificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _get_encoder_for_CertificateObject<X9_68CertificateAttributes>(_encode_X9_68CertificateAttributes), __utils.BER),
    "cvCertificate": __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _get_encoder_for_CertificateObject<CVCertificateAttributes>(_encode_CVCertificateAttributes), __utils.BER),
}, __utils.BER);


export type Certificates = PathOrObjects<CertificateType>; // DefinedType
export const _decode_Certificates = _get_decoder_for_PathOrObjects<CertificateType>(_decode_CertificateType);
export const _encode_Certificates = _get_encoder_for_PathOrObjects<CertificateType>(_encode_CertificateType);


export class CommonDataObjectAttributes {
    constructor (
        readonly applicationName: Label | undefined,
        readonly applicationOID: asn1.OBJECT_IDENTIFIER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonDataObjectAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("applicationName", true, __utils.hasTag(asn1.ASN1TagClass.universal, 12), undefined, undefined),
    new __utils.ComponentSpec("applicationOID", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonDataObjectAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonDataObjectAttributes: __utils.ComponentSpec[] = [

];

export const _decode_CommonDataObjectAttributes = function (el: asn1.ASN1Element): CommonDataObjectAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let applicationName: asn1.OPTIONAL<Label>;
    let applicationOID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "applicationName": (_el: asn1.ASN1Element): void => { applicationName = _decode_Label(_el); },
        "applicationOID": (_el: asn1.ASN1Element): void => { applicationOID = __utils._decodeObjectIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonDataObjectAttributes,
        _extension_additions_list_spec_for_CommonDataObjectAttributes,
        _root_component_type_list_2_spec_for_CommonDataObjectAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonDataObjectAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        applicationName,
        applicationOID,
        _unrecognizedExtensionsList
    );
};
export const _encode_CommonDataObjectAttributes = function (value: CommonDataObjectAttributes, elGetter: __utils.ASN1Encoder<CommonDataObjectAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.applicationName === undefined) ? undefined : _encode_Label(value.applicationName, __utils.BER)),
            /* IF_ABSENT  */ ((value.applicationOID === undefined) ? undefined : __utils._encodeObjectIdentifier(value.applicationOID, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DataObject<DataObjectAttributes> = PKCS15Object<CommonDataObjectAttributes, asn1.NULL, DataObjectAttributes>; // DefinedType
export const _get_decoder_for_DataObject = function <DataObjectAttributes>(_decode_DataObjectAttributes: __utils.ASN1Decoder<DataObjectAttributes>) {
return _get_decoder_for_PKCS15Object<CommonDataObjectAttributes, asn1.NULL, DataObjectAttributes>(_decode_CommonDataObjectAttributes, __utils._decodeNull, _decode_DataObjectAttributes)
}
export const _get_encoder_for_DataObject = function <DataObjectAttributes>(_encode_DataObjectAttributes: __utils.ASN1Encoder<DataObjectAttributes>) {
return _get_encoder_for_PKCS15Object<CommonDataObjectAttributes, asn1.NULL, DataObjectAttributes>(_encode_CommonDataObjectAttributes, __utils._encodeNull, _encode_DataObjectAttributes)
}


export type Opaque = ObjectValue<asn1.ASN1Element>; // DefinedType
export const _decode_Opaque = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny);
export const _encode_Opaque = _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny);


export type ExternalIDO = ObjectValue<asn1.ASN1Element>; // DefinedType
export const _decode_ExternalIDO = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny);
export const _encode_ExternalIDO = _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny);


export class OidDO {
    constructor (
        readonly id: asn1.OBJECT_IDENTIFIER,
        readonly value: ObjectValue<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_OidDO: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OidDO: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_OidDO: __utils.ComponentSpec[] = [

];

export const _decode_OidDO = function (el: asn1.ASN1Element): OidDO {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OidDO contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "id";
    sequence[1].name = "value";
    let id!: asn1.OBJECT_IDENTIFIER;
    let value!: ObjectValue<asn1.ASN1Element>;
    id = __utils._decodeObjectIdentifier(sequence[0]);
    value = _get_decoder_for_ObjectValue<asn1.ASN1Element>(__utils._decodeAny)(sequence[1]);
    // TODO: Validate values.
    return new OidDO(
        id,
        value,

    );
};
export const _encode_OidDO = function (value: OidDO, elGetter: __utils.ASN1Encoder<OidDO>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.id, __utils.BER),
            /* REQUIRED   */ _get_encoder_for_ObjectValue<asn1.ASN1Element>(__utils._encodeAny)(value.value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DataType =
    { opaqueDO: DataObject<Opaque> }
    | { externalIDO: DataObject<ExternalIDO> }
    | { oidDO: DataObject<OidDO> }
    | asn1.ASN1Element;
export const _decode_DataType = __utils._decode_extensible_choice<DataType>({
    "UNIVERSAL 16": [ "opaqueDO", _get_decoder_for_DataObject<Opaque>(_decode_Opaque) ],
    "CONTEXT 0": [ "externalIDO", __utils._decode_implicit<DataObject<ExternalIDO>>(() => _get_decoder_for_DataObject<ExternalIDO>(_decode_ExternalIDO)) ],
    "CONTEXT 1": [ "oidDO", __utils._decode_implicit<DataObject<OidDO>>(() => _get_decoder_for_DataObject<OidDO>(_decode_OidDO)) ]
});
export const _encode_DataType = __utils._encode_choice<DataType>({
    "opaqueDO": _get_encoder_for_DataObject<Opaque>(_encode_Opaque),
    "externalIDO": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_DataObject<ExternalIDO>(_encode_ExternalIDO), __utils.BER),
    "oidDO": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_DataObject<OidDO>(_encode_OidDO), __utils.BER),
}, __utils.BER);


export type DataObjects = PathOrObjects<DataType>; // DefinedType
export const _decode_DataObjects = _get_decoder_for_PathOrObjects<DataType>(_decode_DataType);
export const _encode_DataObjects = _get_encoder_for_PathOrObjects<DataType>(_encode_DataType);


export class CommonAuthenticationObjectAttributes {
    constructor (
        readonly authId: Identifier,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CommonAuthenticationObjectAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("authId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CommonAuthenticationObjectAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CommonAuthenticationObjectAttributes: __utils.ComponentSpec[] = [

];

export const _decode_CommonAuthenticationObjectAttributes = function (el: asn1.ASN1Element): CommonAuthenticationObjectAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("CommonAuthenticationObjectAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "authId";
    let authId!: Identifier;
    authId = _decode_Identifier(sequence[0]);
    // TODO: Validate values.
    return new CommonAuthenticationObjectAttributes(
        authId,
        sequence.slice(1),
    );
};
export const _encode_CommonAuthenticationObjectAttributes = function (value: CommonAuthenticationObjectAttributes, elGetter: __utils.ASN1Encoder<CommonAuthenticationObjectAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identifier(value.authId, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AuthenticationObject<AuthObjectAttributes> = PKCS15Object<CommonAuthenticationObjectAttributes, asn1.NULL, AuthObjectAttributes>; // DefinedType
export const _get_decoder_for_AuthenticationObject = function <AuthObjectAttributes>(_decode_AuthObjectAttributes: __utils.ASN1Decoder<AuthObjectAttributes>) {
return _get_decoder_for_PKCS15Object<CommonAuthenticationObjectAttributes, asn1.NULL, AuthObjectAttributes>(_decode_CommonAuthenticationObjectAttributes, __utils._decodeNull, _decode_AuthObjectAttributes)
}
export const _get_encoder_for_AuthenticationObject = function <AuthObjectAttributes>(_encode_AuthObjectAttributes: __utils.ASN1Encoder<AuthObjectAttributes>) {
return _get_encoder_for_PKCS15Object<CommonAuthenticationObjectAttributes, asn1.NULL, AuthObjectAttributes>(_encode_CommonAuthenticationObjectAttributes, __utils._encodeNull, _encode_AuthObjectAttributes)
}


export type PinFlags = asn1.BIT_STRING;
export const PinFlags_case_sensitive: number = 0; /* LONG_NAMED_BIT */
export const PinFlags_local: number = 1; /* LONG_NAMED_BIT */
export const PinFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */
export const PinFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */
export const PinFlags_initialized: number = 4; /* LONG_NAMED_BIT */
export const PinFlags_needs_padding: number = 5; /* LONG_NAMED_BIT */
export const PinFlags_unblockingPin: number = 6; /* LONG_NAMED_BIT */
export const PinFlags_soPin: number = 7; /* LONG_NAMED_BIT */
export const PinFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */
export const PinFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */
export const PinFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */
export const PinFlags_exchangeRefData: number = 11; /* LONG_NAMED_BIT */
export const _decode_PinFlags = __utils._decodeBitString;
export const _encode_PinFlags = __utils._encodeBitString;


export type PinType = asn1.ENUMERATED;
export const PinType_bcd: PinType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const bcd: PinType = PinType_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PinType_ascii_numeric: PinType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const ascii_numeric: PinType = PinType_ascii_numeric; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PinType_utf8: PinType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const utf8: PinType = PinType_utf8; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PinType_half_nibble_bcd: PinType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const half_nibble_bcd: PinType = PinType_half_nibble_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PinType_iso9564_1: PinType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const iso9564_1: PinType = PinType_iso9564_1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PinType = __utils._decodeEnumerated;
export const _encode_PinType = __utils._encodeEnumerated;


export class PinAttributes {
    constructor (
        readonly pinFlags: PinFlags,
        readonly pinType: PinType,
        readonly minLength: asn1.INTEGER,
        readonly storedLength: asn1.INTEGER,
        readonly maxLength: asn1.INTEGER | undefined,
        readonly pinReference: Reference | undefined,
        readonly padChar: asn1.OCTET_STRING | undefined,
        readonly lastPinChange: asn1.GeneralizedTime | undefined,
        readonly path: Path | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PinAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("pinFlags", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("pinType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("minLength", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("storedLength", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("maxLength", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("pinReference", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("padChar", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("lastPinChange", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("path", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PinAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PinAttributes: __utils.ComponentSpec[] = [

];
export const _default_value_for_PinAttributes__pinReference = 0;
export const _decode_PinAttributes = function (el: asn1.ASN1Element): PinAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let pinFlags!: PinFlags;
    let pinType!: PinType;
    let minLength!: asn1.INTEGER;
    let storedLength!: asn1.INTEGER;
    let maxLength: asn1.OPTIONAL<asn1.INTEGER>;
    let pinReference: asn1.OPTIONAL<Reference> = _default_value_for_PinAttributes__pinReference;
    let padChar: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let lastPinChange: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let path: asn1.OPTIONAL<Path>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "pinFlags": (_el: asn1.ASN1Element): void => { pinFlags = _decode_PinFlags(_el); },
        "pinType": (_el: asn1.ASN1Element): void => { pinType = _decode_PinType(_el); },
        "minLength": (_el: asn1.ASN1Element): void => { minLength = __utils._decodeInteger(_el); },
        "storedLength": (_el: asn1.ASN1Element): void => { storedLength = __utils._decodeInteger(_el); },
        "maxLength": (_el: asn1.ASN1Element): void => { maxLength = __utils._decodeInteger(_el); },
        "pinReference": (_el: asn1.ASN1Element): void => { pinReference = __utils._decode_implicit<Reference>(() => _decode_Reference)(_el); },
        "padChar": (_el: asn1.ASN1Element): void => { padChar = __utils._decodeOctetString(_el); },
        "lastPinChange": (_el: asn1.ASN1Element): void => { lastPinChange = __utils._decodeGeneralizedTime(_el); },
        "path": (_el: asn1.ASN1Element): void => { path = _decode_Path(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PinAttributes,
        _extension_additions_list_spec_for_PinAttributes,
        _root_component_type_list_2_spec_for_PinAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PinAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        pinFlags,
        pinType,
        minLength,
        storedLength,
        maxLength,
        pinReference,
        padChar,
        lastPinChange,
        path,
        _unrecognizedExtensionsList
    );
};
export const _encode_PinAttributes = function (value: PinAttributes, elGetter: __utils.ASN1Encoder<PinAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PinFlags(value.pinFlags, __utils.BER),
            /* REQUIRED   */ _encode_PinType(value.pinType, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.minLength, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.storedLength, __utils.BER),
            /* IF_ABSENT  */ ((value.maxLength === undefined) ? undefined : __utils._encodeInteger(value.maxLength, __utils.BER)),
            /* IF_DEFAULT */ (value.pinReference === undefined || __utils.deepEq(value.pinReference, _default_value_for_PinAttributes__pinReference) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Reference, __utils.BER)(value.pinReference, __utils.BER)),
            /* IF_ABSENT  */ ((value.padChar === undefined) ? undefined : __utils._encodeOctetString(value.padChar, __utils.BER)),
            /* IF_ABSENT  */ ((value.lastPinChange === undefined) ? undefined : __utils._encodeGeneralizedTime(value.lastPinChange, __utils.BER)),
            /* IF_ABSENT  */ ((value.path === undefined) ? undefined : _encode_Path(value.path, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type BiometricFlags = asn1.BIT_STRING;
export const BiometricFlags_local: number = 1; /* LONG_NAMED_BIT */
export const BiometricFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */
export const BiometricFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */
export const BiometricFlags_initialized: number = 4; /* LONG_NAMED_BIT */
export const BiometricFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */
export const BiometricFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */
export const BiometricFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */
export const _decode_BiometricFlags = __utils._decodeBitString;
export const _encode_BiometricFlags = __utils._encodeBitString;


export enum FingerPrint_hand {
    left = 0,
    right = 1,
}
export const FingerPrint_hand_left: FingerPrint_hand = FingerPrint_hand.left; /* LONG_NAMED_ENUMERATED_VALUE */
export const FingerPrint_hand_right: FingerPrint_hand = FingerPrint_hand.right; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_FingerPrint_hand = __utils._decodeEnumerated;
export const _encode_FingerPrint_hand = __utils._encodeEnumerated;


export enum FingerPrint_finger {
    thumb = 0,
    pointerFinger = 1,
    middleFinger = 2,
    ringFinger = 3,
    littleFinger = 4,
}
export const FingerPrint_finger_thumb: FingerPrint_finger = FingerPrint_finger.thumb; /* LONG_NAMED_ENUMERATED_VALUE */
export const thumb: FingerPrint_finger = FingerPrint_finger.thumb; /* SHORT_NAMED_ENUMERATED_VALUE */
export const FingerPrint_finger_pointerFinger: FingerPrint_finger = FingerPrint_finger.pointerFinger; /* LONG_NAMED_ENUMERATED_VALUE */
export const pointerFinger: FingerPrint_finger = FingerPrint_finger.pointerFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
export const FingerPrint_finger_middleFinger: FingerPrint_finger = FingerPrint_finger.middleFinger; /* LONG_NAMED_ENUMERATED_VALUE */
export const middleFinger: FingerPrint_finger = FingerPrint_finger.middleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
export const FingerPrint_finger_ringFinger: FingerPrint_finger = FingerPrint_finger.ringFinger; /* LONG_NAMED_ENUMERATED_VALUE */
export const ringFinger: FingerPrint_finger = FingerPrint_finger.ringFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
export const FingerPrint_finger_littleFinger: FingerPrint_finger = FingerPrint_finger.littleFinger; /* LONG_NAMED_ENUMERATED_VALUE */
export const littleFinger: FingerPrint_finger = FingerPrint_finger.littleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FingerPrint_finger = __utils._decodeEnumerated;
export const _encode_FingerPrint_finger = __utils._encodeEnumerated;


export class FingerPrint {
    constructor (
        readonly hand: FingerPrint_hand,
        readonly finger: FingerPrint_finger,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FingerPrint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("hand", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("finger", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_FingerPrint: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_FingerPrint: __utils.ComponentSpec[] = [

];

export const _decode_FingerPrint = function (el: asn1.ASN1Element): FingerPrint {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("FingerPrint contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "hand";
    sequence[1].name = "finger";
    let hand!: FingerPrint_hand;
    let finger!: FingerPrint_finger;
    hand = _decode_FingerPrint_hand(sequence[0]);
    finger = _decode_FingerPrint_finger(sequence[1]);
    // TODO: Validate values.
    return new FingerPrint(
        hand,
        finger,
        sequence.slice(2),
    );
};
export const _encode_FingerPrint = function (value: FingerPrint, elGetter: __utils.ASN1Encoder<FingerPrint>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FingerPrint_hand(value.hand, __utils.BER),
            /* REQUIRED   */ _encode_FingerPrint_finger(value.finger, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export enum IrisScan_eye {
    left = 0,
    right = 1,
}
export const IrisScan_eye_left: IrisScan_eye = IrisScan_eye.left; /* LONG_NAMED_ENUMERATED_VALUE */
export const IrisScan_eye_right: IrisScan_eye = IrisScan_eye.right; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_IrisScan_eye = __utils._decodeEnumerated;
export const _encode_IrisScan_eye = __utils._encodeEnumerated;


export class IrisScan {
    constructor (
        readonly eye: IrisScan_eye,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IrisScan: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("eye", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_IrisScan: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_IrisScan: __utils.ComponentSpec[] = [

];

export const _decode_IrisScan = function (el: asn1.ASN1Element): IrisScan {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("IrisScan contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "eye";
    let eye!: IrisScan_eye;
    eye = _decode_IrisScan_eye(sequence[0]);
    // TODO: Validate values.
    return new IrisScan(
        eye,
        sequence.slice(1),
    );
};
export const _encode_IrisScan = function (value: IrisScan, elGetter: __utils.ASN1Encoder<IrisScan>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IrisScan_eye(value.eye, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type BiometricType =
    { fingerPrint: FingerPrint }
    | { irisScan: IrisScan }
    | asn1.ASN1Element;
export const _decode_BiometricType = __utils._decode_extensible_choice<BiometricType>({
    "UNIVERSAL 16": [ "fingerPrint", _decode_FingerPrint ],
    "CONTEXT 0": [ "irisScan", __utils._decode_implicit<IrisScan>(() => _decode_IrisScan) ]
});
export const _encode_BiometricType = __utils._encode_choice<BiometricType>({
    "fingerPrint": _encode_FingerPrint,
    "irisScan": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_IrisScan, __utils.BER),
}, __utils.BER);


export class BiometricAttributes {
    constructor (
        readonly bioFlags: BiometricFlags,
        readonly templateId: asn1.OBJECT_IDENTIFIER,
        readonly bioType: BiometricType,
        readonly bioReference: Reference | undefined,
        readonly lastChange: asn1.GeneralizedTime | undefined,
        readonly path: Path | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_BiometricAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("bioFlags", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("templateId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("bioType", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("bioReference", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("lastChange", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("path", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_BiometricAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_BiometricAttributes: __utils.ComponentSpec[] = [

];
export const _default_value_for_BiometricAttributes__bioReference = 0;
export const _decode_BiometricAttributes = function (el: asn1.ASN1Element): BiometricAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let bioFlags!: BiometricFlags;
    let templateId!: asn1.OBJECT_IDENTIFIER;
    let bioType!: BiometricType;
    let bioReference: asn1.OPTIONAL<Reference> = _default_value_for_BiometricAttributes__bioReference;
    let lastChange: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let path: asn1.OPTIONAL<Path>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "bioFlags": (_el: asn1.ASN1Element): void => { bioFlags = _decode_BiometricFlags(_el); },
        "templateId": (_el: asn1.ASN1Element): void => { templateId = __utils._decodeObjectIdentifier(_el); },
        "bioType": (_el: asn1.ASN1Element): void => { bioType = _decode_BiometricType(_el); },
        "bioReference": (_el: asn1.ASN1Element): void => { bioReference = _decode_Reference(_el); },
        "lastChange": (_el: asn1.ASN1Element): void => { lastChange = __utils._decodeGeneralizedTime(_el); },
        "path": (_el: asn1.ASN1Element): void => { path = _decode_Path(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricAttributes,
        _extension_additions_list_spec_for_BiometricAttributes,
        _root_component_type_list_2_spec_for_BiometricAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BiometricAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        bioFlags,
        templateId,
        bioType,
        bioReference,
        lastChange,
        path,
        _unrecognizedExtensionsList
    );
};
export const _encode_BiometricAttributes = function (value: BiometricAttributes, elGetter: __utils.ASN1Encoder<BiometricAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricFlags(value.bioFlags, __utils.BER),
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.templateId, __utils.BER),
            /* REQUIRED   */ _encode_BiometricType(value.bioType, __utils.BER),
            /* IF_DEFAULT */ (value.bioReference === undefined || __utils.deepEq(value.bioReference, _default_value_for_BiometricAttributes__bioReference) ? undefined : _encode_Reference(value.bioReference, __utils.BER)),
            /* IF_ABSENT  */ ((value.lastChange === undefined) ? undefined : __utils._encodeGeneralizedTime(value.lastChange, __utils.BER)),
            /* IF_ABSENT  */ ((value.path === undefined) ? undefined : _encode_Path(value.path, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AuthKeyAttributes {
    constructor (
        readonly derivedKey: asn1.BOOLEAN | undefined,
        readonly authKeyId: Identifier,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AuthKeyAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("derivedKey", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("authKeyId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AuthKeyAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_AuthKeyAttributes: __utils.ComponentSpec[] = [

];
export const _default_value_for_AuthKeyAttributes__derivedKey = true;
export const _decode_AuthKeyAttributes = function (el: asn1.ASN1Element): AuthKeyAttributes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let derivedKey: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_AuthKeyAttributes__derivedKey;
    let authKeyId!: Identifier;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "derivedKey": (_el: asn1.ASN1Element): void => { derivedKey = __utils._decodeBoolean(_el); },
        "authKeyId": (_el: asn1.ASN1Element): void => { authKeyId = _decode_Identifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthKeyAttributes,
        _extension_additions_list_spec_for_AuthKeyAttributes,
        _root_component_type_list_2_spec_for_AuthKeyAttributes,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuthKeyAttributes( /* SEQUENCE_CONSTRUCTOR_CALL */
        derivedKey,
        authKeyId,
        _unrecognizedExtensionsList
    );
};
export const _encode_AuthKeyAttributes = function (value: AuthKeyAttributes, elGetter: __utils.ASN1Encoder<AuthKeyAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.derivedKey === undefined || __utils.deepEq(value.derivedKey, _default_value_for_AuthKeyAttributes__derivedKey) ? undefined : __utils._encodeBoolean(value.derivedKey, __utils.BER)),
            /* REQUIRED   */ _encode_Identifier(value.authKeyId, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CertBasedAuthenticationAttributes {
    constructor (
        readonly cha: asn1.OCTET_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("cha", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CertBasedAuthenticationAttributes: __utils.ComponentSpec[] = [

];

export const _decode_CertBasedAuthenticationAttributes = function (el: asn1.ASN1Element): CertBasedAuthenticationAttributes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("CertBasedAuthenticationAttributes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "cha";
    let cha!: asn1.OCTET_STRING;
    cha = __utils._decodeOctetString(sequence[0]);
    // TODO: Validate values.
    return new CertBasedAuthenticationAttributes(
        cha,
        sequence.slice(1),
    );
};
export const _encode_CertBasedAuthenticationAttributes = function (value: CertBasedAuthenticationAttributes, elGetter: __utils.ASN1Encoder<CertBasedAuthenticationAttributes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeOctetString(value.cha, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ExternalAuthObjectAttributes =
    { authKeyAttributes: AuthKeyAttributes }
    | { certBasedAttributes: CertBasedAuthenticationAttributes }
    | asn1.ASN1Element;
export const _decode_ExternalAuthObjectAttributes = __utils._decode_extensible_choice<ExternalAuthObjectAttributes>({
    "UNIVERSAL 16": [ "authKeyAttributes", _decode_AuthKeyAttributes ],
    "CONTEXT 0": [ "certBasedAttributes", __utils._decode_implicit<CertBasedAuthenticationAttributes>(() => _decode_CertBasedAuthenticationAttributes) ]
});
export const _encode_ExternalAuthObjectAttributes = __utils._encode_choice<ExternalAuthObjectAttributes>({
    "authKeyAttributes": _encode_AuthKeyAttributes,
    "certBasedAttributes": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_CertBasedAuthenticationAttributes, __utils.BER),
}, __utils.BER);


export type AuthenticationType =
    { pin: AuthenticationObject<PinAttributes> }
    | { biometricTemplate: AuthenticationObject<BiometricAttributes> }
    | { authKey: AuthenticationObject<AuthKeyAttributes> }
    | asn1.ASN1Element;
export const _decode_AuthenticationType = __utils._decode_extensible_choice<AuthenticationType>({
    "UNIVERSAL 16": [ "pin", _get_decoder_for_AuthenticationObject<PinAttributes>(_decode_PinAttributes) ],
    "CONTEXT 0": [ "biometricTemplate", __utils._decode_implicit<AuthenticationObject<BiometricAttributes>>(() => _get_decoder_for_AuthenticationObject<BiometricAttributes>(_decode_BiometricAttributes)) ],
    "CONTEXT 1": [ "authKey", __utils._decode_implicit<AuthenticationObject<AuthKeyAttributes>>(() => _get_decoder_for_AuthenticationObject<AuthKeyAttributes>(_decode_AuthKeyAttributes)) ],
    "CONTEXT 2": [ "external", __utils._decode_implicit<AuthenticationObject<ExternalAuthObjectAttributes>>(() => _get_decoder_for_AuthenticationObject<ExternalAuthObjectAttributes>(_decode_ExternalAuthObjectAttributes)) ]
});
export const _encode_AuthenticationType = __utils._encode_choice<AuthenticationType>({
    "pin": _get_encoder_for_AuthenticationObject<PinAttributes>(_encode_PinAttributes),
    "biometricTemplate": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_AuthenticationObject<BiometricAttributes>(_encode_BiometricAttributes), __utils.BER),
    "authKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_AuthenticationObject<AuthKeyAttributes>(_encode_AuthKeyAttributes), __utils.BER),
    "external": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _get_encoder_for_AuthenticationObject<ExternalAuthObjectAttributes>(_encode_ExternalAuthObjectAttributes), __utils.BER),
}, __utils.BER);


export type AuthObjects = PathOrObjects<AuthenticationType>; // DefinedType
export const _decode_AuthObjects = _get_decoder_for_PathOrObjects<AuthenticationType>(_decode_AuthenticationType);
export const _encode_AuthObjects = _get_encoder_for_PathOrObjects<AuthenticationType>(_encode_AuthenticationType);


export type PKCS15Objects =
    { privateKeys: PrivateKeys }
    | { publicKeys: PublicKeys }
    | { trustedPublicKeys: PublicKeys }
    | { secretKeys: SecretKeys }
    | { certificates: Certificates }
    | { trustedCertificates: Certificates }
    | { usefulCertificates: Certificates }
    | { dataObjects: DataObjects }
    | { authObjects: AuthObjects }
    | asn1.ASN1Element;
export const _decode_PKCS15Objects = __utils._decode_extensible_choice<PKCS15Objects>({
    "CONTEXT 0": [ "privateKeys", __utils._decode_implicit<PrivateKeys>(() => _decode_PrivateKeys) ],
    "CONTEXT 1": [ "publicKeys", __utils._decode_implicit<PublicKeys>(() => _decode_PublicKeys) ],
    "CONTEXT 2": [ "trustedPublicKeys", __utils._decode_implicit<PublicKeys>(() => _decode_PublicKeys) ],
    "CONTEXT 3": [ "secretKeys", __utils._decode_implicit<SecretKeys>(() => _decode_SecretKeys) ],
    "CONTEXT 4": [ "certificates", __utils._decode_implicit<Certificates>(() => _decode_Certificates) ],
    "CONTEXT 5": [ "trustedCertificates", __utils._decode_implicit<Certificates>(() => _decode_Certificates) ],
    "CONTEXT 6": [ "usefulCertificates", __utils._decode_implicit<Certificates>(() => _decode_Certificates) ],
    "CONTEXT 7": [ "dataObjects", __utils._decode_implicit<DataObjects>(() => _decode_DataObjects) ],
    "CONTEXT 8": [ "authObjects", __utils._decode_implicit<AuthObjects>(() => _decode_AuthObjects) ]
});
export const _encode_PKCS15Objects = __utils._encode_choice<PKCS15Objects>({
    "privateKeys": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_PrivateKeys, __utils.BER),
    "publicKeys": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_PublicKeys, __utils.BER),
    "trustedPublicKeys": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_PublicKeys, __utils.BER),
    "secretKeys": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_SecretKeys, __utils.BER),
    "certificates": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_Certificates, __utils.BER),
    "trustedCertificates": __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_Certificates, __utils.BER),
    "usefulCertificates": __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => _encode_Certificates, __utils.BER),
    "dataObjects": __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => _encode_DataObjects, __utils.BER),
    "authObjects": __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => _encode_AuthObjects, __utils.BER),
}, __utils.BER);


export class PKCS15Token {
    constructor (
        readonly version: PKCS15Token_version,
        readonly keyManagementInfo: KeyManagementInfo | undefined,
        readonly pkcs15Objects: PKCS15Objects[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PKCS15Token: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("keyManagementInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("pkcs15Objects", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PKCS15Token: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PKCS15Token: __utils.ComponentSpec[] = [

];

export const _decode_PKCS15Token = function (el: asn1.ASN1Element): PKCS15Token {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: PKCS15Token_version;
    let keyManagementInfo: asn1.OPTIONAL<KeyManagementInfo>;
    let pkcs15Objects!: PKCS15Objects[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_PKCS15Token_version(_el); },
        "keyManagementInfo": (_el: asn1.ASN1Element): void => { keyManagementInfo = __utils._decode_implicit<KeyManagementInfo>(() => _decode_KeyManagementInfo)(_el); },
        "pkcs15Objects": (_el: asn1.ASN1Element): void => { pkcs15Objects = __utils._decodeSequenceOf<PKCS15Objects>(() => _decode_PKCS15Objects)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PKCS15Token,
        _extension_additions_list_spec_for_PKCS15Token,
        _root_component_type_list_2_spec_for_PKCS15Token,
        undefined,
    );
    return new PKCS15Token( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        keyManagementInfo,
        pkcs15Objects
    );
};
export const _encode_PKCS15Token = function (value: PKCS15Token, elGetter: __utils.ASN1Encoder<PKCS15Token>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PKCS15Token_version(value.version, __utils.BER),
            /* IF_ABSENT  */ ((value.keyManagementInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_KeyManagementInfo, __utils.BER)(value.keyManagementInfo, __utils.BER)),
            /* REQUIRED   */ __utils._encodeSequenceOf<PKCS15Objects>(() => _encode_PKCS15Objects, __utils.BER)(value.pkcs15Objects, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: KeyDerivationAlgorithms

// TODO: ObjectSetAssignment: KeyEncryptionAlgorithms

// TODO: ObjectSetAssignment: ContentEncryptionAlgorithms

// TODO: ObjectSetAssignment: MACAlgorithms

// TODO: ObjectSetAssignment: DigestAlgorithms

export class DDO {
    constructor (
        readonly oid: asn1.OBJECT_IDENTIFIER,
        readonly odfPath: Path | undefined,
        readonly tokenInfoPath: Path | undefined,
        readonly unusedPath: Path | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DDO: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("oid", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("odfPath", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("tokenInfoPath", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("unusedPath", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DDO: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_DDO: __utils.ComponentSpec[] = [

];

export const _decode_DDO = function (el: asn1.ASN1Element): DDO {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let oid!: asn1.OBJECT_IDENTIFIER;
    let odfPath: asn1.OPTIONAL<Path>;
    let tokenInfoPath: asn1.OPTIONAL<Path>;
    let unusedPath: asn1.OPTIONAL<Path>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "oid": (_el: asn1.ASN1Element): void => { oid = __utils._decodeObjectIdentifier(_el); },
        "odfPath": (_el: asn1.ASN1Element): void => { odfPath = _decode_Path(_el); },
        "tokenInfoPath": (_el: asn1.ASN1Element): void => { tokenInfoPath = __utils._decode_implicit<Path>(() => _decode_Path)(_el); },
        "unusedPath": (_el: asn1.ASN1Element): void => { unusedPath = __utils._decode_implicit<Path>(() => _decode_Path)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DDO,
        _extension_additions_list_spec_for_DDO,
        _root_component_type_list_2_spec_for_DDO,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DDO( /* SEQUENCE_CONSTRUCTOR_CALL */
        oid,
        odfPath,
        tokenInfoPath,
        unusedPath,
        _unrecognizedExtensionsList
    );
};
export const _encode_DDO = function (value: DDO, elGetter: __utils.ASN1Encoder<DDO>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.oid, __utils.BER),
            /* IF_ABSENT  */ ((value.odfPath === undefined) ? undefined : _encode_Path(value.odfPath, __utils.BER)),
            /* IF_ABSENT  */ ((value.tokenInfoPath === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Path, __utils.BER)(value.tokenInfoPath, __utils.BER)),
            /* IF_ABSENT  */ ((value.unusedPath === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Path, __utils.BER)(value.unusedPath, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DIRRecord {
    constructor (
        readonly aid: asn1.OCTET_STRING,
        readonly label: asn1.UTF8String | undefined,
        readonly path: asn1.OCTET_STRING,
        readonly ddo: DDO | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DIRRecord: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("aid", false, __utils.hasTag(asn1.ASN1TagClass.application, 15), undefined, undefined),
    new __utils.ComponentSpec("label", true, __utils.hasTag(asn1.ASN1TagClass.application, 16), undefined, undefined),
    new __utils.ComponentSpec("path", false, __utils.hasTag(asn1.ASN1TagClass.application, 17), undefined, undefined),
    new __utils.ComponentSpec("ddo", true, __utils.hasTag(asn1.ASN1TagClass.application, 19), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DIRRecord: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_DIRRecord: __utils.ComponentSpec[] = [

];

export const _decode_DIRRecord = __utils._decode_implicit<DIRRecord>(() => function (el: asn1.ASN1Element): DIRRecord {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let aid!: asn1.OCTET_STRING;
    let label: asn1.OPTIONAL<asn1.UTF8String>;
    let path!: asn1.OCTET_STRING;
    let ddo: asn1.OPTIONAL<DDO>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "aid": (_el: asn1.ASN1Element): void => { aid = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "label": (_el: asn1.ASN1Element): void => { label = __utils._decode_implicit<asn1.UTF8String>(() => __utils._decodeUTF8String)(_el); },
        "path": (_el: asn1.ASN1Element): void => { path = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "ddo": (_el: asn1.ASN1Element): void => { ddo = __utils._decode_implicit<DDO>(() => _decode_DDO)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DIRRecord,
        _extension_additions_list_spec_for_DIRRecord,
        _root_component_type_list_2_spec_for_DIRRecord,
        undefined,
    );
    return new DIRRecord( /* SEQUENCE_CONSTRUCTOR_CALL */
        aid,
        label,
        path,
        ddo
    );
});
export const _encode_DIRRecord = __utils._encode_implicit(asn1.ASN1TagClass.application, 1, () => function (value: DIRRecord, elGetter: __utils.ASN1Encoder<DIRRecord>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encode_implicit(asn1.ASN1TagClass.application, 15, () => __utils._encodeOctetString, __utils.BER)(value.aid, __utils.BER),
            /* IF_ABSENT  */ ((value.label === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.application, 16, () => __utils._encodeUTF8String, __utils.BER)(value.label, __utils.BER)),
            /* REQUIRED   */ __utils._encode_implicit(asn1.ASN1TagClass.application, 17, () => __utils._encodeOctetString, __utils.BER)(value.path, __utils.BER),
            /* IF_ABSENT  */ ((value.ddo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.application, 19, () => _encode_DDO, __utils.BER)(value.ddo, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export class UnusedSpace {
    constructor (
        readonly path: Path,
        readonly authId: Identifier | undefined,
        readonly accessControlRules: AccessControlRule[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_UnusedSpace: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("path", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("authId", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_UnusedSpace: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_UnusedSpace: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("accessControlRules", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];

export const _decode_UnusedSpace = function (el: asn1.ASN1Element): UnusedSpace {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let path!: Path;
    let authId: asn1.OPTIONAL<Identifier>;
    let accessControlRules: asn1.OPTIONAL<AccessControlRule[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "path": (_el: asn1.ASN1Element): void => { path = _decode_Path(_el); },
        "authId": (_el: asn1.ASN1Element): void => { authId = _decode_Identifier(_el); },
        "accessControlRules": (_el: asn1.ASN1Element): void => { accessControlRules = __utils._decodeSequenceOf<AccessControlRule>(() => _decode_AccessControlRule)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnusedSpace,
        _extension_additions_list_spec_for_UnusedSpace,
        _root_component_type_list_2_spec_for_UnusedSpace,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UnusedSpace( /* SEQUENCE_CONSTRUCTOR_CALL */
        path,
        authId,
        accessControlRules,
        _unrecognizedExtensionsList
    );
};
export const _encode_UnusedSpace = function (value: UnusedSpace, elGetter: __utils.ASN1Encoder<UnusedSpace>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Path(value.path, __utils.BER),
            /* IF_ABSENT  */ ((value.authId === undefined) ? undefined : _encode_Identifier(value.authId, __utils.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.accessControlRules === undefined) ? undefined : __utils._encodeSequenceOf<AccessControlRule>(() => _encode_AccessControlRule, __utils.BER)(value.accessControlRules, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


/* END_MODULE PKCS-15 */
