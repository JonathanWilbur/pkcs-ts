/*
    BEGIN_MODULE PKCS-10
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-10.modules.pkcs-10
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import { Name, _decode_Name, _encode_Name } from "x500-ts/dist/node/InformationFramework";
import * as __utils from "./__utils";

// TODO: ObjectSetAssignment: PKInfoAlgorithms

// TODO: ObjectSetAssignment: CRIAttributes

export type CertificationRequestInfo_version = asn1.INTEGER;
export const CertificationRequestInfo_version_v1: CertificationRequestInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const v1: CertificationRequestInfo_version = CertificationRequestInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CertificationRequestInfo_version = __utils._decodeInteger;
export const _encode_CertificationRequestInfo_version = __utils._encodeInteger;

export class AlgorithmIdentifier {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];

export const _decode_AlgorithmIdentifier = function (
    el: asn1.ASN1Element
): AlgorithmIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        algorithm: (_el: asn1.ASN1Element): void => {
            algorithm = __utils._decodeObjectIdentifier(_el);
        },
        parameters: (_el: asn1.ASN1Element): void => {
            parameters = __utils._decodeAny(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AlgorithmIdentifier,
        _extension_additions_list_spec_for_AlgorithmIdentifier,
        _root_component_type_list_2_spec_for_AlgorithmIdentifier,
        undefined
    );
    return new AlgorithmIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
        algorithm,
        parameters
    );
};
export const _encode_AlgorithmIdentifier = function (
    value: AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.algorithm,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.parameters === undefined
                    ? undefined
                    : __utils._encodeAny(value.parameters, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class SubjectPublicKeyInfo {
    constructor(
        readonly algorithm: AlgorithmIdentifier,
        readonly subjectPublicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPublicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [];

export const _decode_SubjectPublicKeyInfo = function (
    el: asn1.ASN1Element
): SubjectPublicKeyInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "SubjectPublicKeyInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: asn1.BIT_STRING;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SubjectPublicKeyInfo(algorithm, subjectPublicKey);
};
export const _encode_SubjectPublicKeyInfo = function (
    value: SubjectPublicKeyInfo,
    elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.algorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeBitString(
                    value.subjectPublicKey,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class Attribute {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly values: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Attribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Attribute: __utils.ComponentSpec[] = [];

export const _decode_Attribute = function (el: asn1.ASN1Element): Attribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "Attribute contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "values";
    let type_!: asn1.OBJECT_IDENTIFIER;
    let values!: asn1.ASN1Element[];
    type_ = __utils._decodeObjectIdentifier(sequence[0]);
    values = __utils._decodeSetOf<asn1.ASN1Element>(() => __utils._decodeAny)(
        sequence[1]
    );
    // TODO: Validate values.
    return new Attribute(type_, values);
};
export const _encode_Attribute = function (
    value: Attribute,
    elGetter: __utils.ASN1Encoder<Attribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.type_,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(
                    () => __utils._encodeAny,
                    __utils.BER
                )(value.values, __utils.BER),
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

export class CertificationRequestInfo {
    constructor(
        readonly version: CertificationRequestInfo_version,
        readonly subject: Name,
        readonly subjectPKInfo: SubjectPublicKeyInfo,
        readonly attributes: Attributes
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificationRequestInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPKInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificationRequestInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificationRequestInfo: __utils.ComponentSpec[] = [];

export const _decode_CertificationRequestInfo = function (
    el: asn1.ASN1Element
): CertificationRequestInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError(
            "CertificationRequestInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "subject";
    sequence[2].name = "subjectPKInfo";
    sequence[3].name = "attributes";
    let version!: CertificationRequestInfo_version;
    let subject!: Name;
    let subjectPKInfo!: SubjectPublicKeyInfo;
    let attributes!: Attributes;
    version = _decode_CertificationRequestInfo_version(sequence[0]);
    subject = _decode_Name(sequence[1]);
    subjectPKInfo = _decode_SubjectPublicKeyInfo(sequence[2]);
    attributes = __utils._decode_implicit<Attributes>(() => _decode_Attributes)(
        sequence[3]
    );
    // TODO: Validate values.
    return new CertificationRequestInfo(
        version,
        subject,
        subjectPKInfo,
        attributes
    );
};
export const _encode_CertificationRequestInfo = function (
    value: CertificationRequestInfo,
    elGetter: __utils.ASN1Encoder<CertificationRequestInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_CertificationRequestInfo_version(
                    value.version,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
                /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                    value.subjectPKInfo,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_Attributes,
                    __utils.BER
                )(value.attributes, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class CertificationRequest {
    constructor(
        readonly certificationRequestInfo: CertificationRequestInfo,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificationRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certificationRequestInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificationRequest: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificationRequest: __utils.ComponentSpec[] = [];

export const _decode_CertificationRequest = function (
    el: asn1.ASN1Element
): CertificationRequest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "CertificationRequest contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "certificationRequestInfo";
    sequence[1].name = "signatureAlgorithm";
    sequence[2].name = "signature";
    let certificationRequestInfo!: CertificationRequestInfo;
    let signatureAlgorithm!: AlgorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    certificationRequestInfo = _decode_CertificationRequestInfo(sequence[0]);
    signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
    signature = __utils._decodeBitString(sequence[2]);
    // TODO: Validate values.
    return new CertificationRequest(
        certificationRequestInfo,
        signatureAlgorithm,
        signature
    );
};
export const _encode_CertificationRequest = function (
    value: CertificationRequest,
    elGetter: __utils.ASN1Encoder<CertificationRequest>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_CertificationRequestInfo(
                    value.certificationRequestInfo,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.signatureAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeBitString(
                    value.signature,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectSetAssignment: SignatureAlgorithms

/* END_MODULE PKCS-10 */
