/*
    BEGIN_MODULE PKCS-1
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-1.modules.pkcs-1
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
export { id_sha256, id_sha384, id_sha512 } from "./NIST-SHA2";

export const pkcs_1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    1,
]);

export const rsaEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_1
);

export const md2WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    pkcs_1
);

export const md5WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    pkcs_1
);

export const sha1WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    pkcs_1
);

export const sha256WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    pkcs_1
);

export const sha384WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    pkcs_1
);

export const sha512WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    pkcs_1
);

export const id_md2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* digestAlgorithm */ 2,
    2,
]);

export const id_md5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* digestAlgorithm */ 2,
    5,
]);

// TODO: ObjectSetAssignment: OAEP-PSSDigestAlgorithms

// TODO: ObjectSetAssignment: PKCS1-v1-5DigestAlgorithms

// TODO: ObjectSetAssignment: PKCS1MGFAlgorithms

// TODO: ObjectSetAssignment: PKCS1PSourceAlgorithms

// TODO: ObjectSetAssignment: PKCS1Algorithms

export class RSAPublicKey {
    constructor(
        readonly modulus: asn1.INTEGER,
        readonly publicExponent: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_RSAPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "modulus",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicExponent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSAPublicKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSAPublicKey: __utils.ComponentSpec[] = [];

export const _decode_RSAPublicKey = function (
    el: asn1.ASN1Element
): RSAPublicKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "RSAPublicKey contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "modulus";
    sequence[1].name = "publicExponent";
    let modulus!: asn1.INTEGER;
    let publicExponent!: asn1.INTEGER;
    modulus = __utils._decodeInteger(sequence[0]);
    publicExponent = __utils._decodeInteger(sequence[1]);
    // TODO: Validate values.
    return new RSAPublicKey(modulus, publicExponent);
};
export const _encode_RSAPublicKey = function (
    value: RSAPublicKey,
    elGetter: __utils.ASN1Encoder<RSAPublicKey>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeInteger(
                    value.modulus,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.publicExponent,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type Version = asn1.INTEGER;
export const Version_two_prime: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const two_prime: Version = Version_two_prime; /* SHORT_NAMED_INTEGER_VALUE */
export const Version_multi: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const multi: Version = Version_multi; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Version = __utils._decodeInteger;
export const _encode_Version = __utils._encodeInteger;

export class OtherPrimeInfo {
    constructor(
        readonly prime: asn1.INTEGER,
        readonly exponent: asn1.INTEGER,
        readonly coefficient: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherPrimeInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "prime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exponent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "coefficient",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OtherPrimeInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OtherPrimeInfo: __utils.ComponentSpec[] = [];

export const _decode_OtherPrimeInfo = function (
    el: asn1.ASN1Element
): OtherPrimeInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "OtherPrimeInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "prime";
    sequence[1].name = "exponent";
    sequence[2].name = "coefficient";
    let prime!: asn1.INTEGER;
    let exponent!: asn1.INTEGER;
    let coefficient!: asn1.INTEGER;
    prime = __utils._decodeInteger(sequence[0]);
    exponent = __utils._decodeInteger(sequence[1]);
    coefficient = __utils._decodeInteger(sequence[2]);
    // TODO: Validate values.
    return new OtherPrimeInfo(prime, exponent, coefficient);
};
export const _encode_OtherPrimeInfo = function (
    value: OtherPrimeInfo,
    elGetter: __utils.ASN1Encoder<OtherPrimeInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeInteger(
                    value.prime,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.exponent,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.coefficient,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type OtherPrimeInfos = OtherPrimeInfo[]; // SequenceOfType
export const _decode_OtherPrimeInfos = __utils._decodeSequenceOf<
    OtherPrimeInfo
>(() => _decode_OtherPrimeInfo);
export const _encode_OtherPrimeInfos = __utils._encodeSequenceOf<
    OtherPrimeInfo
>(() => _encode_OtherPrimeInfo, __utils.BER);

export class RSAPrivateKey {
    constructor(
        readonly version: Version,
        readonly modulus: asn1.INTEGER,
        readonly publicExponent: asn1.INTEGER,
        readonly privateExponent: asn1.INTEGER,
        readonly prime1: asn1.INTEGER,
        readonly prime2: asn1.INTEGER,
        readonly exponent1: asn1.INTEGER,
        readonly exponent2: asn1.INTEGER,
        readonly coefficient: asn1.INTEGER,
        readonly otherPrimeInfos: OtherPrimeInfos | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RSAPrivateKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "modulus",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicExponent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateExponent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "prime1",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "prime2",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exponent1",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exponent2",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "coefficient",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "otherPrimeInfos",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSAPrivateKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSAPrivateKey: __utils.ComponentSpec[] = [];

export const _decode_RSAPrivateKey = function (
    el: asn1.ASN1Element
): RSAPrivateKey {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: Version;
    let modulus!: asn1.INTEGER;
    let publicExponent!: asn1.INTEGER;
    let privateExponent!: asn1.INTEGER;
    let prime1!: asn1.INTEGER;
    let prime2!: asn1.INTEGER;
    let exponent1!: asn1.INTEGER;
    let exponent2!: asn1.INTEGER;
    let coefficient!: asn1.INTEGER;
    let otherPrimeInfos: asn1.OPTIONAL<OtherPrimeInfos>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        modulus: (_el: asn1.ASN1Element): void => {
            modulus = __utils._decodeInteger(_el);
        },
        publicExponent: (_el: asn1.ASN1Element): void => {
            publicExponent = __utils._decodeInteger(_el);
        },
        privateExponent: (_el: asn1.ASN1Element): void => {
            privateExponent = __utils._decodeInteger(_el);
        },
        prime1: (_el: asn1.ASN1Element): void => {
            prime1 = __utils._decodeInteger(_el);
        },
        prime2: (_el: asn1.ASN1Element): void => {
            prime2 = __utils._decodeInteger(_el);
        },
        exponent1: (_el: asn1.ASN1Element): void => {
            exponent1 = __utils._decodeInteger(_el);
        },
        exponent2: (_el: asn1.ASN1Element): void => {
            exponent2 = __utils._decodeInteger(_el);
        },
        coefficient: (_el: asn1.ASN1Element): void => {
            coefficient = __utils._decodeInteger(_el);
        },
        otherPrimeInfos: (_el: asn1.ASN1Element): void => {
            otherPrimeInfos = _decode_OtherPrimeInfos(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RSAPrivateKey,
        _extension_additions_list_spec_for_RSAPrivateKey,
        _root_component_type_list_2_spec_for_RSAPrivateKey,
        undefined
    );
    return new RSAPrivateKey /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        modulus,
        publicExponent,
        privateExponent,
        prime1,
        prime2,
        exponent1,
        exponent2,
        coefficient,
        otherPrimeInfos
    );
};
export const _encode_RSAPrivateKey = function (
    value: RSAPrivateKey,
    elGetter: __utils.ASN1Encoder<RSAPrivateKey>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.modulus,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.publicExponent,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.privateExponent,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.prime1,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.prime2,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.exponent1,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.exponent2,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeInteger(
                    value.coefficient,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.otherPrimeInfos === undefined
                    ? undefined
                    : _encode_OtherPrimeInfos(
                          value.otherPrimeInfos,
                          __utils.BER
                      ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectClassAssignment: ALGORITHM-IDENTIFIER

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

export type RSAES_AlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_RSAES_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_RSAES_AlgorithmIdentifier = _encode_AlgorithmIdentifier;

export const id_RSAES_OAEP: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    pkcs_1
);

export type HashAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_HashAlgorithm = _decode_AlgorithmIdentifier;
export const _encode_HashAlgorithm = _encode_AlgorithmIdentifier;

export const id_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithms */ 2,
    26,
]);

export type SHA1Parameters = asn1.NULL; // NullType
export const _decode_SHA1Parameters = __utils._decodeNull;
export const _encode_SHA1Parameters = __utils._encodeNull;

const sha1 = new AlgorithmIdentifier(
    id_sha1,
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null
    )
);

export type MaskGenAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_MaskGenAlgorithm = _decode_AlgorithmIdentifier;
export const _encode_MaskGenAlgorithm = _encode_AlgorithmIdentifier;

export const id_mgf1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    pkcs_1
);

const mgf1SHA1 = new AlgorithmIdentifier(
    id_mgf1,
    _encode_AlgorithmIdentifier(sha1, __utils.DER)
);

export type PSourceAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_PSourceAlgorithm = _decode_AlgorithmIdentifier;
export const _encode_PSourceAlgorithm = _encode_AlgorithmIdentifier;

export const id_pSpecified: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    pkcs_1
);

export type EncodingParameters = asn1.OCTET_STRING; // OctetStringType
export const _decode_EncodingParameters = __utils._decodeOctetString;
export const _encode_EncodingParameters = __utils._encodeOctetString;

export const emptyString: EncodingParameters = new Uint8Array(0);

const pSpecifiedEmpty = new AlgorithmIdentifier(
    id_pSpecified,
    _encode_EncodingParameters(emptyString, __utils.DER)
);

export class RSAES_OAEP_params {
    constructor(
        readonly hashAlgorithm: HashAlgorithm | undefined,
        readonly maskGenAlgorithm: MaskGenAlgorithm | undefined,
        readonly pSourceAlgorithm: PSourceAlgorithm | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RSAES_OAEP_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maskGenAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pSourceAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSAES_OAEP_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSAES_OAEP_params: __utils.ComponentSpec[] = [];
export const _default_value_for_RSAES_OAEP_params__hashAlgorithm = sha1;
export const _default_value_for_RSAES_OAEP_params__maskGenAlgorithm = mgf1SHA1;
export const _default_value_for_RSAES_OAEP_params__pSourceAlgorithm = pSpecifiedEmpty;
export const _decode_RSAES_OAEP_params = function (
    el: asn1.ASN1Element
): RSAES_OAEP_params {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let hashAlgorithm: asn1.OPTIONAL<HashAlgorithm> = _default_value_for_RSAES_OAEP_params__hashAlgorithm;
    let maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm> = _default_value_for_RSAES_OAEP_params__maskGenAlgorithm;
    let pSourceAlgorithm: asn1.OPTIONAL<PSourceAlgorithm> = _default_value_for_RSAES_OAEP_params__pSourceAlgorithm;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        hashAlgorithm: (_el: asn1.ASN1Element): void => {
            hashAlgorithm = __utils._decode_explicit<HashAlgorithm>(
                () => _decode_HashAlgorithm
            )(_el);
        },
        maskGenAlgorithm: (_el: asn1.ASN1Element): void => {
            maskGenAlgorithm = __utils._decode_explicit<MaskGenAlgorithm>(
                () => _decode_MaskGenAlgorithm
            )(_el);
        },
        pSourceAlgorithm: (_el: asn1.ASN1Element): void => {
            pSourceAlgorithm = __utils._decode_explicit<PSourceAlgorithm>(
                () => _decode_PSourceAlgorithm
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RSAES_OAEP_params,
        _extension_additions_list_spec_for_RSAES_OAEP_params,
        _root_component_type_list_2_spec_for_RSAES_OAEP_params,
        undefined
    );
    return new RSAES_OAEP_params /* SEQUENCE_CONSTRUCTOR_CALL */(
        hashAlgorithm,
        maskGenAlgorithm,
        pSourceAlgorithm
    );
};
export const _encode_RSAES_OAEP_params = function (
    value: RSAES_OAEP_params,
    elGetter: __utils.ASN1Encoder<RSAES_OAEP_params>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                __utils.deepEq(
                    value.hashAlgorithm,
                    _default_value_for_RSAES_OAEP_params__hashAlgorithm
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_HashAlgorithm,
                          __utils.BER
                      )(value.hashAlgorithm, __utils.BER),
                /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                __utils.deepEq(
                    value.maskGenAlgorithm,
                    _default_value_for_RSAES_OAEP_params__maskGenAlgorithm
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_MaskGenAlgorithm,
                          __utils.BER
                      )(value.maskGenAlgorithm, __utils.BER),
                /* IF_DEFAULT */ value.pSourceAlgorithm === undefined ||
                __utils.deepEq(
                    value.pSourceAlgorithm,
                    _default_value_for_RSAES_OAEP_params__pSourceAlgorithm
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => _encode_PSourceAlgorithm,
                          __utils.BER
                      )(value.pSourceAlgorithm, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: DefinedType SequenceValue rSAES-OAEP-Default-Identifier

export type RSASSA_AlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
export const _decode_RSASSA_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_RSASSA_AlgorithmIdentifier = _encode_AlgorithmIdentifier;

export const id_RSASSA_PSS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    pkcs_1
);

export type TrailerField = asn1.INTEGER;
export const TrailerField_trailerFieldBC: TrailerField = 1; /* LONG_NAMED_INTEGER_VALUE */
export const trailerFieldBC: TrailerField = TrailerField_trailerFieldBC; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TrailerField = __utils._decodeInteger;
export const _encode_TrailerField = __utils._encodeInteger;

export class RSASSA_PSS_params {
    constructor(
        readonly hashAlgorithm: HashAlgorithm | undefined,
        readonly maskGenAlgorithm: MaskGenAlgorithm | undefined,
        readonly saltLength: asn1.INTEGER | undefined,
        readonly trailerField: TrailerField | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RSASSA_PSS_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maskGenAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "saltLength",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "trailerField",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSASSA_PSS_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSASSA_PSS_params: __utils.ComponentSpec[] = [];
export const _default_value_for_RSASSA_PSS_params__hashAlgorithm = sha1;
export const _default_value_for_RSASSA_PSS_params__maskGenAlgorithm = mgf1SHA1;
export const _default_value_for_RSASSA_PSS_params__saltLength = 20;
export const _default_value_for_RSASSA_PSS_params__trailerField = trailerFieldBC;
export const _decode_RSASSA_PSS_params = function (
    el: asn1.ASN1Element
): RSASSA_PSS_params {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let hashAlgorithm: asn1.OPTIONAL<HashAlgorithm> = _default_value_for_RSASSA_PSS_params__hashAlgorithm;
    let maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm> = _default_value_for_RSASSA_PSS_params__maskGenAlgorithm;
    let saltLength: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_RSASSA_PSS_params__saltLength;
    let trailerField: asn1.OPTIONAL<TrailerField> = _default_value_for_RSASSA_PSS_params__trailerField;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        hashAlgorithm: (_el: asn1.ASN1Element): void => {
            hashAlgorithm = __utils._decode_explicit<HashAlgorithm>(
                () => _decode_HashAlgorithm
            )(_el);
        },
        maskGenAlgorithm: (_el: asn1.ASN1Element): void => {
            maskGenAlgorithm = __utils._decode_explicit<MaskGenAlgorithm>(
                () => _decode_MaskGenAlgorithm
            )(_el);
        },
        saltLength: (_el: asn1.ASN1Element): void => {
            saltLength = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
        trailerField: (_el: asn1.ASN1Element): void => {
            trailerField = __utils._decode_explicit<TrailerField>(
                () => _decode_TrailerField
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RSASSA_PSS_params,
        _extension_additions_list_spec_for_RSASSA_PSS_params,
        _root_component_type_list_2_spec_for_RSASSA_PSS_params,
        undefined
    );
    return new RSASSA_PSS_params /* SEQUENCE_CONSTRUCTOR_CALL */(
        hashAlgorithm,
        maskGenAlgorithm,
        saltLength,
        trailerField
    );
};
export const _encode_RSASSA_PSS_params = function (
    value: RSASSA_PSS_params,
    elGetter: __utils.ASN1Encoder<RSASSA_PSS_params>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                __utils.deepEq(
                    value.hashAlgorithm,
                    _default_value_for_RSASSA_PSS_params__hashAlgorithm
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_HashAlgorithm,
                          __utils.BER
                      )(value.hashAlgorithm, __utils.BER),
                /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                __utils.deepEq(
                    value.maskGenAlgorithm,
                    _default_value_for_RSASSA_PSS_params__maskGenAlgorithm
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_MaskGenAlgorithm,
                          __utils.BER
                      )(value.maskGenAlgorithm, __utils.BER),
                /* IF_DEFAULT */ value.saltLength === undefined ||
                __utils.deepEq(
                    value.saltLength,
                    _default_value_for_RSASSA_PSS_params__saltLength
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => __utils._encodeInteger,
                          __utils.BER
                      )(value.saltLength, __utils.BER),
                /* IF_DEFAULT */ value.trailerField === undefined ||
                __utils.deepEq(
                    value.trailerField,
                    _default_value_for_RSASSA_PSS_params__trailerField
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => _encode_TrailerField,
                          __utils.BER
                      )(value.trailerField, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: DefinedType SequenceValue rSASSA-PSS-Default-Identifier

export type DigestAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_DigestAlgorithm = _decode_AlgorithmIdentifier;
export const _encode_DigestAlgorithm = _encode_AlgorithmIdentifier;

export class DigestInfo {
    constructor(
        readonly digestAlgorithm: DigestAlgorithm,
        readonly digest: asn1.OCTET_STRING
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
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
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
    let digestAlgorithm!: DigestAlgorithm;
    let digest!: asn1.OCTET_STRING;
    digestAlgorithm = _decode_DigestAlgorithm(sequence[0]);
    digest = __utils._decodeOctetString(sequence[1]);
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
                /* REQUIRED   */ _encode_DigestAlgorithm(
                    value.digestAlgorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeOctetString(
                    value.digest,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

/* END_MODULE PKCS-1 */
