/*
    BEGIN_MODULE PKCS5v2-1
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-5.modules.pkcs5v2-1
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";
export {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";

export const nistAlgorithms: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-itu-t */ 2,
        /* country */ 16,
        /* us */ 840,
        /* organization */ 1,
        /* gov */ 101,
        /* csor */ 3,
        4,
    ]
);

export const oiw: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    14,
]);

export const rsadsi: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    113549,
]);

export const pkcs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    rsadsi
);

export const pkcs_5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    pkcs
);

// TODO: ObjectSetAssignment: PBKDF2Algorithms

export const id_PBKDF2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    pkcs_5
);

// TODO: ObjectClassAssignment: ALGORITHM-IDENTIFIER

export type PBKDF2_params_salt =
    | { specified: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { otherSource: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PBKDF2_params_salt: __utils.ASN1Decoder<
    PBKDF2_params_salt
> | null = null;
let _cached_encoder_for_PBKDF2_params_salt: __utils.ASN1Encoder<
    PBKDF2_params_salt
> | null = null;
export function _decode_PBKDF2_params_salt(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBKDF2_params_salt) {
        _cached_decoder_for_PBKDF2_params_salt = __utils._decode_inextensible_choice<
            PBKDF2_params_salt
        >({
            "UNIVERSAL 4": ["specified", __utils._decodeOctetString],
            "UNIVERSAL 16": ["otherSource", _decode_AlgorithmIdentifier],
        });
    }
    return _cached_decoder_for_PBKDF2_params_salt(el);
}
export function _encode_PBKDF2_params_salt(
    value: PBKDF2_params_salt,
    elGetter: __utils.ASN1Encoder<PBKDF2_params_salt>
) {
    if (!_cached_encoder_for_PBKDF2_params_salt) {
        _cached_encoder_for_PBKDF2_params_salt = __utils._encode_choice<
            PBKDF2_params_salt
        >(
            {
                specified: __utils._encodeOctetString,
                otherSource: _encode_AlgorithmIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PBKDF2_params_salt(value, elGetter);
}

export class PBKDF2_params {
    constructor(
        readonly salt: PBKDF2_params_salt,
        readonly iterationCount: asn1.INTEGER,
        readonly keyLength: asn1.OPTIONAL<asn1.INTEGER>,
        readonly prf: asn1.OPTIONAL<AlgorithmIdentifier>
    ) {}
    public static get _default_value_for_prf() {
        return algid_hmacWithSHA1;
    }
}
export const _root_component_type_list_1_spec_for_PBKDF2_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "salt",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iterationCount",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyLength",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "prf",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PBKDF2_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PBKDF2_params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PBKDF2_params: __utils.ASN1Decoder<
    PBKDF2_params
> | null = null;
let _cached_encoder_for_PBKDF2_params: __utils.ASN1Encoder<
    PBKDF2_params
> | null = null;
export function _decode_PBKDF2_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBKDF2_params) {
        _cached_decoder_for_PBKDF2_params = function (
            el: asn1.ASN1Element
        ): PBKDF2_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let salt!: PBKDF2_params_salt;
            let iterationCount!: asn1.INTEGER;
            let keyLength: asn1.OPTIONAL<asn1.INTEGER>;
            let prf: asn1.OPTIONAL<AlgorithmIdentifier> =
                PBKDF2_params._default_value_for_prf;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                salt: (_el: asn1.ASN1Element): void => {
                    salt = _decode_PBKDF2_params_salt(_el);
                },
                iterationCount: (_el: asn1.ASN1Element): void => {
                    iterationCount = __utils._decodeInteger(_el);
                },
                keyLength: (_el: asn1.ASN1Element): void => {
                    keyLength = __utils._decodeInteger(_el);
                },
                prf: (_el: asn1.ASN1Element): void => {
                    prf = _decode_AlgorithmIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PBKDF2_params,
                _extension_additions_list_spec_for_PBKDF2_params,
                _root_component_type_list_2_spec_for_PBKDF2_params,
                undefined
            );
            return new PBKDF2_params /* SEQUENCE_CONSTRUCTOR_CALL */(
                salt,
                iterationCount,
                keyLength,
                prf
            );
        };
    }
    return _cached_decoder_for_PBKDF2_params(el);
}
export function _encode_PBKDF2_params(
    value: PBKDF2_params,
    elGetter: __utils.ASN1Encoder<PBKDF2_params>
) {
    if (!_cached_encoder_for_PBKDF2_params) {
        _cached_encoder_for_PBKDF2_params = function (
            value: PBKDF2_params,
            elGetter: __utils.ASN1Encoder<PBKDF2_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PBKDF2_params_salt(
                            value.salt,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.iterationCount,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.keyLength === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.keyLength,
                                  __utils.BER
                              ),
                        /* IF_DEFAULT */ value.prf === undefined ||
                        __utils.deepEq(
                            value.prf,
                            PBKDF2_params._default_value_for_prf
                        )
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.prf,
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
    return _cached_encoder_for_PBKDF2_params(value, elGetter);
}

// TODO: ObjectSetAssignment: PBKDF2-SaltSources

// TODO: ObjectSetAssignment: PBKDF2-PRFs

// TODO: ObjectSetAssignment: PBES1Algorithms

export const pbeWithMD2AndDES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_5
);

export const pbeWithMD2AndRC2_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    pkcs_5
);

export const pbeWithMD5AndDES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    pkcs_5
);

export const pbeWithMD5AndRC2_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    pkcs_5
);

export const pbeWithSHA1AndDES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    pkcs_5
);

export const pbeWithSHA1AndRC2_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    pkcs_5
);

export class PBEParameter {
    constructor(
        readonly salt: asn1.OCTET_STRING,
        readonly iterationCount: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_PBEParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "salt",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iterationCount",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PBEParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PBEParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PBEParameter: __utils.ASN1Decoder<
    PBEParameter
> | null = null;
let _cached_encoder_for_PBEParameter: __utils.ASN1Encoder<
    PBEParameter
> | null = null;
export function _decode_PBEParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBEParameter) {
        _cached_decoder_for_PBEParameter = function (
            el: asn1.ASN1Element
        ): PBEParameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PBEParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "salt";
            sequence[1].name = "iterationCount";
            let salt!: asn1.OCTET_STRING;
            let iterationCount!: asn1.INTEGER;
            salt = __utils._decodeOctetString(sequence[0]);
            iterationCount = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new PBEParameter(salt, iterationCount);
        };
    }
    return _cached_decoder_for_PBEParameter(el);
}
export function _encode_PBEParameter(
    value: PBEParameter,
    elGetter: __utils.ASN1Encoder<PBEParameter>
) {
    if (!_cached_encoder_for_PBEParameter) {
        _cached_encoder_for_PBEParameter = function (
            value: PBEParameter,
            elGetter: __utils.ASN1Encoder<PBEParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.salt,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.iterationCount,
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
    return _cached_encoder_for_PBEParameter(value, elGetter);
}

// TODO: ObjectSetAssignment: PBES2Algorithms

export const id_PBES2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    pkcs_5
);

export class PBES2_params {
    constructor(
        readonly keyDerivationFunc: AlgorithmIdentifier,
        readonly encryptionScheme: AlgorithmIdentifier
    ) {}
}
export const _root_component_type_list_1_spec_for_PBES2_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyDerivationFunc",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptionScheme",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PBES2_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PBES2_params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PBES2_params: __utils.ASN1Decoder<
    PBES2_params
> | null = null;
let _cached_encoder_for_PBES2_params: __utils.ASN1Encoder<
    PBES2_params
> | null = null;
export function _decode_PBES2_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBES2_params) {
        _cached_decoder_for_PBES2_params = function (
            el: asn1.ASN1Element
        ): PBES2_params {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PBES2-params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "keyDerivationFunc";
            sequence[1].name = "encryptionScheme";
            let keyDerivationFunc!: AlgorithmIdentifier;
            let encryptionScheme!: AlgorithmIdentifier;
            keyDerivationFunc = _decode_AlgorithmIdentifier(sequence[0]);
            encryptionScheme = _decode_AlgorithmIdentifier(sequence[1]);
            // TODO: Validate values.
            return new PBES2_params(keyDerivationFunc, encryptionScheme);
        };
    }
    return _cached_decoder_for_PBES2_params(el);
}
export function _encode_PBES2_params(
    value: PBES2_params,
    elGetter: __utils.ASN1Encoder<PBES2_params>
) {
    if (!_cached_encoder_for_PBES2_params) {
        _cached_encoder_for_PBES2_params = function (
            value: PBES2_params,
            elGetter: __utils.ASN1Encoder<PBES2_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.keyDerivationFunc,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.encryptionScheme,
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
    return _cached_encoder_for_PBES2_params(value, elGetter);
}

// TODO: ObjectSetAssignment: PBES2-KDFs

// TODO: ObjectSetAssignment: PBES2-Encs

// TODO: ObjectSetAssignment: PBMAC1Algorithms

export const id_PBMAC1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    pkcs_5
);

export class PBMAC1_params {
    constructor(
        readonly keyDerivationFunc: AlgorithmIdentifier,
        readonly messageAuthScheme: AlgorithmIdentifier
    ) {}
}
export const _root_component_type_list_1_spec_for_PBMAC1_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyDerivationFunc",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageAuthScheme",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PBMAC1_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PBMAC1_params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PBMAC1_params: __utils.ASN1Decoder<
    PBMAC1_params
> | null = null;
let _cached_encoder_for_PBMAC1_params: __utils.ASN1Encoder<
    PBMAC1_params
> | null = null;
export function _decode_PBMAC1_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBMAC1_params) {
        _cached_decoder_for_PBMAC1_params = function (
            el: asn1.ASN1Element
        ): PBMAC1_params {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PBMAC1-params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "keyDerivationFunc";
            sequence[1].name = "messageAuthScheme";
            let keyDerivationFunc!: AlgorithmIdentifier;
            let messageAuthScheme!: AlgorithmIdentifier;
            keyDerivationFunc = _decode_AlgorithmIdentifier(sequence[0]);
            messageAuthScheme = _decode_AlgorithmIdentifier(sequence[1]);
            // TODO: Validate values.
            return new PBMAC1_params(keyDerivationFunc, messageAuthScheme);
        };
    }
    return _cached_decoder_for_PBMAC1_params(el);
}
export function _encode_PBMAC1_params(
    value: PBMAC1_params,
    elGetter: __utils.ASN1Encoder<PBMAC1_params>
) {
    if (!_cached_encoder_for_PBMAC1_params) {
        _cached_encoder_for_PBMAC1_params = function (
            value: PBMAC1_params,
            elGetter: __utils.ASN1Encoder<PBMAC1_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.keyDerivationFunc,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.messageAuthScheme,
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
    return _cached_encoder_for_PBMAC1_params(value, elGetter);
}

// TODO: ObjectSetAssignment: PBMAC1-KDFs

// TODO: ObjectSetAssignment: PBMAC1-MACs

export const digestAlgorithm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    rsadsi
);

export const encryptionAlgorithm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    rsadsi
);

// TODO: ObjectSetAssignment: SupportingAlgorithms

export const id_hmacWithSHA224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    digestAlgorithm
);

export const id_hmacWithSHA256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    digestAlgorithm
);

export const id_hmacWithSHA384: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    digestAlgorithm
);

export const id_hmacWithSHA512: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    digestAlgorithm
);

export const id_hmacWithSHA512_224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    digestAlgorithm
);

export const id_hmacWithSHA512_256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    digestAlgorithm
);

export const desCBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* secsig */ 3, /* algorithms */ 2, 7],
    oiw
);

export const des_EDE3_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    encryptionAlgorithm
);

export const rc2CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    encryptionAlgorithm
);

export class RC2_CBC_Parameter {
    constructor(
        readonly rc2ParameterVersion: asn1.OPTIONAL<asn1.INTEGER>,
        readonly iv: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_RC2_CBC_Parameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rc2ParameterVersion",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iv",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RC2_CBC_Parameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RC2_CBC_Parameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RC2_CBC_Parameter: __utils.ASN1Decoder<
    RC2_CBC_Parameter
> | null = null;
let _cached_encoder_for_RC2_CBC_Parameter: __utils.ASN1Encoder<
    RC2_CBC_Parameter
> | null = null;
export function _decode_RC2_CBC_Parameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2_CBC_Parameter) {
        _cached_decoder_for_RC2_CBC_Parameter = function (
            el: asn1.ASN1Element
        ): RC2_CBC_Parameter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rc2ParameterVersion: asn1.OPTIONAL<asn1.INTEGER>;
            let iv!: asn1.OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                rc2ParameterVersion: (_el: asn1.ASN1Element): void => {
                    rc2ParameterVersion = __utils._decodeInteger(_el);
                },
                iv: (_el: asn1.ASN1Element): void => {
                    iv = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RC2_CBC_Parameter,
                _extension_additions_list_spec_for_RC2_CBC_Parameter,
                _root_component_type_list_2_spec_for_RC2_CBC_Parameter,
                undefined
            );
            return new RC2_CBC_Parameter /* SEQUENCE_CONSTRUCTOR_CALL */(
                rc2ParameterVersion,
                iv
            );
        };
    }
    return _cached_decoder_for_RC2_CBC_Parameter(el);
}
export function _encode_RC2_CBC_Parameter(
    value: RC2_CBC_Parameter,
    elGetter: __utils.ASN1Encoder<RC2_CBC_Parameter>
) {
    if (!_cached_encoder_for_RC2_CBC_Parameter) {
        _cached_encoder_for_RC2_CBC_Parameter = function (
            value: RC2_CBC_Parameter,
            elGetter: __utils.ASN1Encoder<RC2_CBC_Parameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.rc2ParameterVersion === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.rc2ParameterVersion,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.iv,
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
    return _cached_encoder_for_RC2_CBC_Parameter(value, elGetter);
}

export const rc5_CBC_PAD: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    encryptionAlgorithm
);

export type RC5_CBC_Parameters_version = asn1.INTEGER;
export const RC5_CBC_Parameters_version_v1_0: RC5_CBC_Parameters_version = 16; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_RC5_CBC_Parameters_version: __utils.ASN1Decoder<
    RC5_CBC_Parameters_version
> | null = null;
let _cached_encoder_for_RC5_CBC_Parameters_version: __utils.ASN1Encoder<
    RC5_CBC_Parameters_version
> | null = null;
export function _decode_RC5_CBC_Parameters_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC5_CBC_Parameters_version) {
        _cached_decoder_for_RC5_CBC_Parameters_version = __utils._decodeInteger;
    }
    return _cached_decoder_for_RC5_CBC_Parameters_version(el);
}
export function _encode_RC5_CBC_Parameters_version(
    value: RC5_CBC_Parameters_version,
    elGetter: __utils.ASN1Encoder<RC5_CBC_Parameters_version>
) {
    if (!_cached_encoder_for_RC5_CBC_Parameters_version) {
        _cached_encoder_for_RC5_CBC_Parameters_version = __utils._encodeInteger;
    }
    return _cached_encoder_for_RC5_CBC_Parameters_version(value, elGetter);
}

export class RC5_CBC_Parameters {
    constructor(
        readonly version: RC5_CBC_Parameters_version,
        readonly rounds: asn1.INTEGER,
        readonly blockSizeInBits: asn1.INTEGER,
        readonly iv: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_RC5_CBC_Parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "rounds",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "blockSizeInBits",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iv",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RC5_CBC_Parameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RC5_CBC_Parameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RC5_CBC_Parameters: __utils.ASN1Decoder<
    RC5_CBC_Parameters
> | null = null;
let _cached_encoder_for_RC5_CBC_Parameters: __utils.ASN1Encoder<
    RC5_CBC_Parameters
> | null = null;
export function _decode_RC5_CBC_Parameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC5_CBC_Parameters) {
        _cached_decoder_for_RC5_CBC_Parameters = function (
            el: asn1.ASN1Element
        ): RC5_CBC_Parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: RC5_CBC_Parameters_version;
            let rounds!: asn1.INTEGER;
            let blockSizeInBits!: asn1.INTEGER;
            let iv: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_RC5_CBC_Parameters_version(_el);
                },
                rounds: (_el: asn1.ASN1Element): void => {
                    rounds = __utils._decodeInteger(_el);
                },
                blockSizeInBits: (_el: asn1.ASN1Element): void => {
                    blockSizeInBits = __utils._decodeInteger(_el);
                },
                iv: (_el: asn1.ASN1Element): void => {
                    iv = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RC5_CBC_Parameters,
                _extension_additions_list_spec_for_RC5_CBC_Parameters,
                _root_component_type_list_2_spec_for_RC5_CBC_Parameters,
                undefined
            );
            return new RC5_CBC_Parameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                rounds,
                blockSizeInBits,
                iv
            );
        };
    }
    return _cached_decoder_for_RC5_CBC_Parameters(el);
}
export function _encode_RC5_CBC_Parameters(
    value: RC5_CBC_Parameters,
    elGetter: __utils.ASN1Encoder<RC5_CBC_Parameters>
) {
    if (!_cached_encoder_for_RC5_CBC_Parameters) {
        _cached_encoder_for_RC5_CBC_Parameters = function (
            value: RC5_CBC_Parameters,
            elGetter: __utils.ASN1Encoder<RC5_CBC_Parameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RC5_CBC_Parameters_version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.rounds,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.blockSizeInBits,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.iv === undefined
                            ? undefined
                            : __utils._encodeOctetString(value.iv, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RC5_CBC_Parameters(value, elGetter);
}

export const aes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    nistAlgorithms
);

export const aes128_CBC_PAD: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    aes
);

export const aes192_CBC_PAD: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [22],
    aes
);

export const aes256_CBC_PAD: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [42],
    aes
);

export const id_hmacWithSHA1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    digestAlgorithm
);

export const algid_hmacWithSHA1: AlgorithmIdentifier = new AlgorithmIdentifier(
    // id_hmacWithSHA1, // Not defined anywhere
    new asn1.ObjectIdentifier([1, 2, 840, 113549, 2, 7]),
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null
    )
);

/* END_MODULE PKCS5v2-1 */
