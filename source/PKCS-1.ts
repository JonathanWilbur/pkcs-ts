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
        readonly modulus: asn1.OCTET_STRING,
        readonly publicExponent: asn1.OCTET_STRING
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
let _cached_decoder_for_RSAPublicKey: __utils.ASN1Decoder<
    RSAPublicKey
> | null = null;
let _cached_encoder_for_RSAPublicKey: __utils.ASN1Encoder<
    RSAPublicKey
> | null = null;
export function _decode_RSAPublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSAPublicKey) {
        _cached_decoder_for_RSAPublicKey = function (
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
            let modulus!: asn1.OCTET_STRING;
            let publicExponent!: asn1.OCTET_STRING;
            modulus = __utils._decodeBigInt(sequence[0]);
            publicExponent = __utils._decodeBigInt(sequence[1]);
            // TODO: Validate values.
            return new RSAPublicKey(modulus, publicExponent);
        };
    }
    return _cached_decoder_for_RSAPublicKey(el);
}
export function _encode_RSAPublicKey(
    value: RSAPublicKey,
    elGetter: __utils.ASN1Encoder<RSAPublicKey>
) {
    if (!_cached_encoder_for_RSAPublicKey) {
        _cached_encoder_for_RSAPublicKey = function (
            value: RSAPublicKey,
            elGetter: __utils.ASN1Encoder<RSAPublicKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.modulus,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.publicExponent,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_RSAPublicKey(value, elGetter);
}

export type Version = asn1.INTEGER;
export const Version_two_prime: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Version_multi: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
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

export class OtherPrimeInfo {
    constructor(
        readonly prime: asn1.OCTET_STRING,
        readonly exponent: asn1.OCTET_STRING,
        readonly coefficient: asn1.OCTET_STRING
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
let _cached_decoder_for_OtherPrimeInfo: __utils.ASN1Decoder<
    OtherPrimeInfo
> | null = null;
let _cached_encoder_for_OtherPrimeInfo: __utils.ASN1Encoder<
    OtherPrimeInfo
> | null = null;
export function _decode_OtherPrimeInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OtherPrimeInfo) {
        _cached_decoder_for_OtherPrimeInfo = function (
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
            let prime!: asn1.OCTET_STRING;
            let exponent!: asn1.OCTET_STRING;
            let coefficient!: asn1.OCTET_STRING;
            prime = __utils._decodeBigInt(sequence[0]);
            exponent = __utils._decodeBigInt(sequence[1]);
            coefficient = __utils._decodeBigInt(sequence[2]);
            // TODO: Validate values.
            return new OtherPrimeInfo(prime, exponent, coefficient);
        };
    }
    return _cached_decoder_for_OtherPrimeInfo(el);
}
export function _encode_OtherPrimeInfo(
    value: OtherPrimeInfo,
    elGetter: __utils.ASN1Encoder<OtherPrimeInfo>
) {
    if (!_cached_encoder_for_OtherPrimeInfo) {
        _cached_encoder_for_OtherPrimeInfo = function (
            value: OtherPrimeInfo,
            elGetter: __utils.ASN1Encoder<OtherPrimeInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.prime,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.exponent,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.coefficient,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_OtherPrimeInfo(value, elGetter);
}

export type OtherPrimeInfos = OtherPrimeInfo[]; // SequenceOfType
let _cached_decoder_for_OtherPrimeInfos: __utils.ASN1Decoder<
    OtherPrimeInfos
> | null = null;
let _cached_encoder_for_OtherPrimeInfos: __utils.ASN1Encoder<
    OtherPrimeInfos
> | null = null;
export function _decode_OtherPrimeInfos(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OtherPrimeInfos) {
        _cached_decoder_for_OtherPrimeInfos = __utils._decodeSequenceOf<
            OtherPrimeInfo
        >(() => _decode_OtherPrimeInfo);
    }
    return _cached_decoder_for_OtherPrimeInfos(el);
}
export function _encode_OtherPrimeInfos(
    value: OtherPrimeInfos,
    elGetter: __utils.ASN1Encoder<OtherPrimeInfos>
) {
    if (!_cached_encoder_for_OtherPrimeInfos) {
        _cached_encoder_for_OtherPrimeInfos = __utils._encodeSequenceOf<
            OtherPrimeInfo
        >(() => _encode_OtherPrimeInfo, __utils.DER);
    }
    return _cached_encoder_for_OtherPrimeInfos(value, elGetter);
}

export class RSAPrivateKey {
    constructor(
        readonly version: Version,
        readonly modulus: asn1.OCTET_STRING,
        readonly publicExponent: asn1.OCTET_STRING,
        readonly privateExponent: asn1.OCTET_STRING,
        readonly prime1: asn1.OCTET_STRING,
        readonly prime2: asn1.OCTET_STRING,
        readonly exponent1: asn1.OCTET_STRING,
        readonly exponent2: asn1.OCTET_STRING,
        readonly coefficient: asn1.OCTET_STRING,
        readonly otherPrimeInfos: asn1.OPTIONAL<OtherPrimeInfos>
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
let _cached_decoder_for_RSAPrivateKey: __utils.ASN1Decoder<
    RSAPrivateKey
> | null = null;
let _cached_encoder_for_RSAPrivateKey: __utils.ASN1Encoder<
    RSAPrivateKey
> | null = null;
export function _decode_RSAPrivateKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSAPrivateKey) {
        _cached_decoder_for_RSAPrivateKey = function (
            el: asn1.ASN1Element
        ): RSAPrivateKey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let modulus!: asn1.OCTET_STRING;
            let publicExponent!: asn1.OCTET_STRING;
            let privateExponent!: asn1.OCTET_STRING;
            let prime1!: asn1.OCTET_STRING;
            let prime2!: asn1.OCTET_STRING;
            let exponent1!: asn1.OCTET_STRING;
            let exponent2!: asn1.OCTET_STRING;
            let coefficient!: asn1.OCTET_STRING;
            let otherPrimeInfos: asn1.OPTIONAL<OtherPrimeInfos>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                modulus: (_el: asn1.ASN1Element): void => {
                    modulus = __utils._decodeBigInt(_el);
                },
                publicExponent: (_el: asn1.ASN1Element): void => {
                    publicExponent = __utils._decodeBigInt(_el);
                },
                privateExponent: (_el: asn1.ASN1Element): void => {
                    privateExponent = __utils._decodeBigInt(_el);
                },
                prime1: (_el: asn1.ASN1Element): void => {
                    prime1 = __utils._decodeBigInt(_el);
                },
                prime2: (_el: asn1.ASN1Element): void => {
                    prime2 = __utils._decodeBigInt(_el);
                },
                exponent1: (_el: asn1.ASN1Element): void => {
                    exponent1 = __utils._decodeBigInt(_el);
                },
                exponent2: (_el: asn1.ASN1Element): void => {
                    exponent2 = __utils._decodeBigInt(_el);
                },
                coefficient: (_el: asn1.ASN1Element): void => {
                    coefficient = __utils._decodeBigInt(_el);
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
            return new RSAPrivateKey(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
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
    }
    return _cached_decoder_for_RSAPrivateKey(el);
}
export function _encode_RSAPrivateKey(
    value: RSAPrivateKey,
    elGetter: __utils.ASN1Encoder<RSAPrivateKey>
) {
    if (!_cached_encoder_for_RSAPrivateKey) {
        _cached_encoder_for_RSAPrivateKey = function (
            value: RSAPrivateKey,
            elGetter: __utils.ASN1Encoder<RSAPrivateKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.modulus,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.publicExponent,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.privateExponent,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.prime1,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.prime2,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.exponent1,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.exponent2,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeBigInt(
                            value.coefficient,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.otherPrimeInfos === undefined
                            ? undefined
                            : _encode_OtherPrimeInfos(
                                  value.otherPrimeInfos,
                                  __utils.DER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_RSAPrivateKey(value, elGetter);
}

// TODO: ObjectClassAssignment: ALGORITHM-IDENTIFIER

export class AlgorithmIdentifier {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.OPTIONAL<asn1.ASN1Element>
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
let _cached_decoder_for_AlgorithmIdentifier: __utils.ASN1Decoder<
    AlgorithmIdentifier
> | null = null;
let _cached_encoder_for_AlgorithmIdentifier: __utils.ASN1Encoder<
    AlgorithmIdentifier
> | null = null;
export function _decode_AlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AlgorithmIdentifier) {
        _cached_decoder_for_AlgorithmIdentifier = function (
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
            return new AlgorithmIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
                parameters
            );
        };
    }
    return _cached_decoder_for_AlgorithmIdentifier(el);
}
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_AlgorithmIdentifier) {
        _cached_encoder_for_AlgorithmIdentifier = function (
            value: AlgorithmIdentifier,
            elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.algorithm,
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : __utils._encodeAny(value.parameters, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

export type RSAES_AlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_RSAES_AlgorithmIdentifier: __utils.ASN1Decoder<
    RSAES_AlgorithmIdentifier
> | null = null;
let _cached_encoder_for_RSAES_AlgorithmIdentifier: __utils.ASN1Encoder<
    RSAES_AlgorithmIdentifier
> | null = null;
export function _decode_RSAES_AlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSAES_AlgorithmIdentifier) {
        _cached_decoder_for_RSAES_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_RSAES_AlgorithmIdentifier(el);
}
export function _encode_RSAES_AlgorithmIdentifier(
    value: RSAES_AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<RSAES_AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_RSAES_AlgorithmIdentifier) {
        _cached_encoder_for_RSAES_AlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_RSAES_AlgorithmIdentifier(value, elGetter);
}

export const id_RSAES_OAEP: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    pkcs_1
);

export type HashAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_HashAlgorithm: __utils.ASN1Decoder<
    HashAlgorithm
> | null = null;
let _cached_encoder_for_HashAlgorithm: __utils.ASN1Encoder<
    HashAlgorithm
> | null = null;
export function _decode_HashAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashAlgorithm) {
        _cached_decoder_for_HashAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_HashAlgorithm(el);
}
export function _encode_HashAlgorithm(
    value: HashAlgorithm,
    elGetter: __utils.ASN1Encoder<HashAlgorithm>
) {
    if (!_cached_encoder_for_HashAlgorithm) {
        _cached_encoder_for_HashAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_HashAlgorithm(value, elGetter);
}

export const id_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithms */ 2,
    26,
]);

export type SHA1Parameters = asn1.NULL; // NullType
let _cached_decoder_for_SHA1Parameters: __utils.ASN1Decoder<
    SHA1Parameters
> | null = null;
let _cached_encoder_for_SHA1Parameters: __utils.ASN1Encoder<
    SHA1Parameters
> | null = null;
export function _decode_SHA1Parameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SHA1Parameters) {
        _cached_decoder_for_SHA1Parameters = __utils._decodeNull;
    }
    return _cached_decoder_for_SHA1Parameters(el);
}
export function _encode_SHA1Parameters(
    value: SHA1Parameters,
    elGetter: __utils.ASN1Encoder<SHA1Parameters>
) {
    if (!_cached_encoder_for_SHA1Parameters) {
        _cached_encoder_for_SHA1Parameters = __utils._encodeNull;
    }
    return _cached_encoder_for_SHA1Parameters(value, elGetter);
}

const sha1: HashAlgorithm = new AlgorithmIdentifier(
    id_sha1,
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null
    )
);

export type MaskGenAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_MaskGenAlgorithm: __utils.ASN1Decoder<
    MaskGenAlgorithm
> | null = null;
let _cached_encoder_for_MaskGenAlgorithm: __utils.ASN1Encoder<
    MaskGenAlgorithm
> | null = null;
export function _decode_MaskGenAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MaskGenAlgorithm) {
        _cached_decoder_for_MaskGenAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MaskGenAlgorithm(el);
}
export function _encode_MaskGenAlgorithm(
    value: MaskGenAlgorithm,
    elGetter: __utils.ASN1Encoder<MaskGenAlgorithm>
) {
    if (!_cached_encoder_for_MaskGenAlgorithm) {
        _cached_encoder_for_MaskGenAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MaskGenAlgorithm(value, elGetter);
}

export const id_mgf1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    pkcs_1
);

const mgf1SHA1: MaskGenAlgorithm = new AlgorithmIdentifier(
    id_mgf1,
    _encode_AlgorithmIdentifier(sha1, __utils.DER)
);

export type PSourceAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_PSourceAlgorithm: __utils.ASN1Decoder<
    PSourceAlgorithm
> | null = null;
let _cached_encoder_for_PSourceAlgorithm: __utils.ASN1Encoder<
    PSourceAlgorithm
> | null = null;
export function _decode_PSourceAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PSourceAlgorithm) {
        _cached_decoder_for_PSourceAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PSourceAlgorithm(el);
}
export function _encode_PSourceAlgorithm(
    value: PSourceAlgorithm,
    elGetter: __utils.ASN1Encoder<PSourceAlgorithm>
) {
    if (!_cached_encoder_for_PSourceAlgorithm) {
        _cached_encoder_for_PSourceAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PSourceAlgorithm(value, elGetter);
}

export const id_pSpecified: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    pkcs_1
);

export type EncodingParameters = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncodingParameters: __utils.ASN1Decoder<
    EncodingParameters
> | null = null;
let _cached_encoder_for_EncodingParameters: __utils.ASN1Encoder<
    EncodingParameters
> | null = null;
export function _decode_EncodingParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncodingParameters) {
        _cached_decoder_for_EncodingParameters = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncodingParameters(el);
}
export function _encode_EncodingParameters(
    value: EncodingParameters,
    elGetter: __utils.ASN1Encoder<EncodingParameters>
) {
    if (!_cached_encoder_for_EncodingParameters) {
        _cached_encoder_for_EncodingParameters = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncodingParameters(value, elGetter);
}

export const emptyString: EncodingParameters = new Uint8Array(0);

const pSpecifiedEmpty: PSourceAlgorithm = new AlgorithmIdentifier(
    id_pSpecified,
    __utils._encodeOctetString(new Uint8Array(0), __utils.DER)
);

export class RSAES_OAEP_params {
    constructor(
        readonly hashAlgorithm: asn1.OPTIONAL<HashAlgorithm>,
        readonly maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm>,
        readonly pSourceAlgorithm: asn1.OPTIONAL<PSourceAlgorithm>
    ) {}
    public static get _default_value_for_hashAlgorithm() {
        return sha1;
    }
    public static get _default_value_for_maskGenAlgorithm() {
        return mgf1SHA1;
    }
    public static get _default_value_for_pSourceAlgorithm() {
        return pSpecifiedEmpty;
    }
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
let _cached_decoder_for_RSAES_OAEP_params: __utils.ASN1Decoder<
    RSAES_OAEP_params
> | null = null;
let _cached_encoder_for_RSAES_OAEP_params: __utils.ASN1Encoder<
    RSAES_OAEP_params
> | null = null;
export function _decode_RSAES_OAEP_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSAES_OAEP_params) {
        _cached_decoder_for_RSAES_OAEP_params = function (
            el: asn1.ASN1Element
        ): RSAES_OAEP_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlgorithm: asn1.OPTIONAL<HashAlgorithm> =
                RSAES_OAEP_params._default_value_for_hashAlgorithm;
            let maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm> =
                RSAES_OAEP_params._default_value_for_maskGenAlgorithm;
            let pSourceAlgorithm: asn1.OPTIONAL<PSourceAlgorithm> =
                RSAES_OAEP_params._default_value_for_pSourceAlgorithm;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashAlgorithm: (_el: asn1.ASN1Element): void => {
                    hashAlgorithm = __utils._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenAlgorithm: (_el: asn1.ASN1Element): void => {
                    maskGenAlgorithm = __utils._decode_explicit<
                        MaskGenAlgorithm
                    >(() => _decode_MaskGenAlgorithm)(_el);
                },
                pSourceAlgorithm: (_el: asn1.ASN1Element): void => {
                    pSourceAlgorithm = __utils._decode_explicit<
                        PSourceAlgorithm
                    >(() => _decode_PSourceAlgorithm)(_el);
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
            return new RSAES_OAEP_params(
                /* SEQUENCE_CONSTRUCTOR_CALL */ hashAlgorithm,
                maskGenAlgorithm,
                pSourceAlgorithm
            );
        };
    }
    return _cached_decoder_for_RSAES_OAEP_params(el);
}
export function _encode_RSAES_OAEP_params(
    value: RSAES_OAEP_params,
    elGetter: __utils.ASN1Encoder<RSAES_OAEP_params>
) {
    if (!_cached_encoder_for_RSAES_OAEP_params) {
        _cached_encoder_for_RSAES_OAEP_params = function (
            value: RSAES_OAEP_params,
            elGetter: __utils.ASN1Encoder<RSAES_OAEP_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        __utils.deepEq(
                            value.hashAlgorithm,
                            RSAES_OAEP_params._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  __utils.DER
                              )(value.hashAlgorithm, __utils.DER),
                        /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                        __utils.deepEq(
                            value.maskGenAlgorithm,
                            RSAES_OAEP_params._default_value_for_maskGenAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  __utils.DER
                              )(value.maskGenAlgorithm, __utils.DER),
                        /* IF_DEFAULT */ value.pSourceAlgorithm === undefined ||
                        __utils.deepEq(
                            value.pSourceAlgorithm,
                            RSAES_OAEP_params._default_value_for_pSourceAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_PSourceAlgorithm,
                                  __utils.DER
                              )(value.pSourceAlgorithm, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_RSAES_OAEP_params(value, elGetter);
}

export const rSAES_OAEP_Default_Identifier: RSAES_AlgorithmIdentifier = new AlgorithmIdentifier(
    id_RSAES_OAEP,
    _encode_RSAES_OAEP_params(
        new RSAES_OAEP_params(sha1, mgf1SHA1, pSpecifiedEmpty),
        __utils.DER
    )
);

export type RSASSA_AlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_RSASSA_AlgorithmIdentifier: __utils.ASN1Decoder<
    RSASSA_AlgorithmIdentifier
> | null = null;
let _cached_encoder_for_RSASSA_AlgorithmIdentifier: __utils.ASN1Encoder<
    RSASSA_AlgorithmIdentifier
> | null = null;
export function _decode_RSASSA_AlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSASSA_AlgorithmIdentifier) {
        _cached_decoder_for_RSASSA_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_RSASSA_AlgorithmIdentifier(el);
}
export function _encode_RSASSA_AlgorithmIdentifier(
    value: RSASSA_AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<RSASSA_AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_RSASSA_AlgorithmIdentifier) {
        _cached_encoder_for_RSASSA_AlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_RSASSA_AlgorithmIdentifier(value, elGetter);
}

export const id_RSASSA_PSS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    pkcs_1
);

export type TrailerField = asn1.INTEGER;
export const TrailerField_trailerFieldBC: TrailerField = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_TrailerField: __utils.ASN1Decoder<
    TrailerField
> | null = null;
let _cached_encoder_for_TrailerField: __utils.ASN1Encoder<
    TrailerField
> | null = null;
export function _decode_TrailerField(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TrailerField) {
        _cached_decoder_for_TrailerField = __utils._decodeInteger;
    }
    return _cached_decoder_for_TrailerField(el);
}
export function _encode_TrailerField(
    value: TrailerField,
    elGetter: __utils.ASN1Encoder<TrailerField>
) {
    if (!_cached_encoder_for_TrailerField) {
        _cached_encoder_for_TrailerField = __utils._encodeInteger;
    }
    return _cached_encoder_for_TrailerField(value, elGetter);
}

export class RSASSA_PSS_params {
    constructor(
        readonly hashAlgorithm: asn1.OPTIONAL<HashAlgorithm>,
        readonly maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm>,
        readonly saltLength: asn1.OPTIONAL<asn1.INTEGER>,
        readonly trailerField: asn1.OPTIONAL<TrailerField>
    ) {}
    public static get _default_value_for_hashAlgorithm() {
        return sha1;
    }
    public static get _default_value_for_maskGenAlgorithm() {
        return mgf1SHA1;
    }
    public static get _default_value_for_saltLength() {
        return 20;
    }
    public static get _default_value_for_trailerField() {
        return TrailerField_trailerFieldBC;
    }
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
let _cached_decoder_for_RSASSA_PSS_params: __utils.ASN1Decoder<
    RSASSA_PSS_params
> | null = null;
let _cached_encoder_for_RSASSA_PSS_params: __utils.ASN1Encoder<
    RSASSA_PSS_params
> | null = null;
export function _decode_RSASSA_PSS_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSASSA_PSS_params) {
        _cached_decoder_for_RSASSA_PSS_params = function (
            el: asn1.ASN1Element
        ): RSASSA_PSS_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlgorithm: asn1.OPTIONAL<HashAlgorithm> =
                RSASSA_PSS_params._default_value_for_hashAlgorithm;
            let maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm> =
                RSASSA_PSS_params._default_value_for_maskGenAlgorithm;
            let saltLength: asn1.OPTIONAL<asn1.INTEGER> =
                RSASSA_PSS_params._default_value_for_saltLength;
            let trailerField: asn1.OPTIONAL<TrailerField> =
                RSASSA_PSS_params._default_value_for_trailerField;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashAlgorithm: (_el: asn1.ASN1Element): void => {
                    hashAlgorithm = __utils._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenAlgorithm: (_el: asn1.ASN1Element): void => {
                    maskGenAlgorithm = __utils._decode_explicit<
                        MaskGenAlgorithm
                    >(() => _decode_MaskGenAlgorithm)(_el);
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
            return new RSASSA_PSS_params(
                /* SEQUENCE_CONSTRUCTOR_CALL */ hashAlgorithm,
                maskGenAlgorithm,
                saltLength,
                trailerField
            );
        };
    }
    return _cached_decoder_for_RSASSA_PSS_params(el);
}
export function _encode_RSASSA_PSS_params(
    value: RSASSA_PSS_params,
    elGetter: __utils.ASN1Encoder<RSASSA_PSS_params>
) {
    if (!_cached_encoder_for_RSASSA_PSS_params) {
        _cached_encoder_for_RSASSA_PSS_params = function (
            value: RSASSA_PSS_params,
            elGetter: __utils.ASN1Encoder<RSASSA_PSS_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        __utils.deepEq(
                            value.hashAlgorithm,
                            RSASSA_PSS_params._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  __utils.DER
                              )(value.hashAlgorithm, __utils.DER),
                        /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                        __utils.deepEq(
                            value.maskGenAlgorithm,
                            RSASSA_PSS_params._default_value_for_maskGenAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  __utils.DER
                              )(value.maskGenAlgorithm, __utils.DER),
                        /* IF_DEFAULT */ value.saltLength === undefined ||
                        __utils.deepEq(
                            value.saltLength,
                            RSASSA_PSS_params._default_value_for_saltLength
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeInteger,
                                  __utils.DER
                              )(value.saltLength, __utils.DER),
                        /* IF_DEFAULT */ value.trailerField === undefined ||
                        __utils.deepEq(
                            value.trailerField,
                            RSASSA_PSS_params._default_value_for_trailerField
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_TrailerField,
                                  __utils.DER
                              )(value.trailerField, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_RSASSA_PSS_params(value, elGetter);
}

export const rSASSA_PSS_Default_Identifier: RSASSA_AlgorithmIdentifier = new AlgorithmIdentifier(
    id_RSASSA_PSS,
    _encode_RSASSA_PSS_params(
        new RSASSA_PSS_params(sha1, mgf1SHA1, 20, TrailerField_trailerFieldBC),
        __utils.DER
    )
);

export type DigestAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_DigestAlgorithm: __utils.ASN1Decoder<
    DigestAlgorithm
> | null = null;
let _cached_encoder_for_DigestAlgorithm: __utils.ASN1Encoder<
    DigestAlgorithm
> | null = null;
export function _decode_DigestAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestAlgorithm) {
        _cached_decoder_for_DigestAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestAlgorithm(el);
}
export function _encode_DigestAlgorithm(
    value: DigestAlgorithm,
    elGetter: __utils.ASN1Encoder<DigestAlgorithm>
) {
    if (!_cached_encoder_for_DigestAlgorithm) {
        _cached_encoder_for_DigestAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestAlgorithm(value, elGetter);
}

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
let _cached_decoder_for_DigestInfo: __utils.ASN1Decoder<
    DigestInfo
> | null = null;
let _cached_encoder_for_DigestInfo: __utils.ASN1Encoder<
    DigestInfo
> | null = null;
export function _decode_DigestInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestInfo) {
        _cached_decoder_for_DigestInfo = function (
            el: asn1.ASN1Element
        ): DigestInfo {
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
    }
    return _cached_decoder_for_DigestInfo(el);
}
export function _encode_DigestInfo(
    value: DigestInfo,
    elGetter: __utils.ASN1Encoder<DigestInfo>
) {
    if (!_cached_encoder_for_DigestInfo) {
        _cached_encoder_for_DigestInfo = function (
            value: DigestInfo,
            elGetter: __utils.ASN1Encoder<DigestInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DigestAlgorithm(
                            value.digestAlgorithm,
                            __utils.DER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.digest,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_DigestInfo(value, elGetter);
}

/* END_MODULE PKCS-1 */
