
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
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";


export const nistAlgorithms: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    4,
]);

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

export const pkcs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], rsadsi);

export const pkcs_5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], pkcs);

// TODO: ObjectSetAssignment: PBKDF2Algorithms

export const id_PBKDF2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], pkcs_5);

// TODO: ObjectClassAssignment: ALGORITHM-IDENTIFIER

export class AlgorithmIdentifier {
    constructor (
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    
];

export const _decode_AlgorithmIdentifier = function (el: asn1.ASN1Element): AlgorithmIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = __utils._decodeObjectIdentifier(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlgorithmIdentifier,
        _extension_additions_list_spec_for_AlgorithmIdentifier,
        _root_component_type_list_2_spec_for_AlgorithmIdentifier,
        undefined,
    );
    return new AlgorithmIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithm,
        parameters
    );
};
export const _encode_AlgorithmIdentifier = function (value: AlgorithmIdentifier, elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.algorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : __utils._encodeAny(value.parameters, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: DefinedType SequenceValue algid-hmacWithSHA1

/* END_MODULE PKCS5v2-1 */
