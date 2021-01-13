/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ExtendedCertificateInfo,
    _decode_ExtendedCertificateInfo,
    _encode_ExtendedCertificateInfo,
} from "../CryptographicMessageSyntax/ExtendedCertificateInfo.ta";
import {
    Signature,
    _decode_Signature,
    _encode_Signature,
} from "../CryptographicMessageSyntax/Signature.ta";
import {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/SignatureAlgorithmIdentifier.ta";
export {
    ExtendedCertificateInfo,
    _decode_ExtendedCertificateInfo,
    _encode_ExtendedCertificateInfo,
} from "../CryptographicMessageSyntax/ExtendedCertificateInfo.ta";
export {
    Signature,
    _decode_Signature,
    _encode_Signature,
} from "../CryptographicMessageSyntax/Signature.ta";
export {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/SignatureAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION ExtendedCertificate */
/**
 * @summary ExtendedCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificate ::= SEQUENCE {
 *   extendedCertificateInfo  ExtendedCertificateInfo,
 *   signatureAlgorithm       SignatureAlgorithmIdentifier,
 *   signature                Signature
 * }
 * ```
 *
 * @class
 */
export class ExtendedCertificate {
    constructor(
        /**
         * @summary `extendedCertificateInfo`.
         * @public
         * @readonly
         */
        readonly extendedCertificateInfo: ExtendedCertificateInfo,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: Signature
    ) {}

    /**
     * @summary Restructures an object into a ExtendedCertificate
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedCertificate`.
     * @returns {ExtendedCertificate}
     */
    public static _from_object(
        _o: { [_K in keyof ExtendedCertificate]: ExtendedCertificate[_K] }
    ): ExtendedCertificate {
        return new ExtendedCertificate(
            _o.extendedCertificateInfo,
            _o.signatureAlgorithm,
            _o.signature
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedCertificate */
/**
 * @summary The Leading Root Component Types of ExtendedCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "extendedCertificateInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedCertificate */
/**
 * @summary The Trailing Root Component Types of ExtendedCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedCertificate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedCertificate */
/**
 * @summary The Extension Addition Component Types of ExtendedCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedCertificate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificate */
let _cached_decoder_for_ExtendedCertificate: $.ASN1Decoder<ExtendedCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificate} The decoded data structure.
 */
export function _decode_ExtendedCertificate(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificate) {
        _cached_decoder_for_ExtendedCertificate = function (
            el: _Element
        ): ExtendedCertificate {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "ExtendedCertificate contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "extendedCertificateInfo";
            sequence[1].name = "signatureAlgorithm";
            sequence[2].name = "signature";
            let extendedCertificateInfo!: ExtendedCertificateInfo;
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let signature!: Signature;
            extendedCertificateInfo = _decode_ExtendedCertificateInfo(
                sequence[0]
            );
            signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                sequence[1]
            );
            signature = _decode_Signature(sequence[2]);
            return new ExtendedCertificate(
                extendedCertificateInfo,
                signatureAlgorithm,
                signature
            );
        };
    }
    return _cached_decoder_for_ExtendedCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificate */
let _cached_encoder_for_ExtendedCertificate: $.ASN1Encoder<ExtendedCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedCertificate */
/**
 * @summary Encodes a(n) ExtendedCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificate(
    value: ExtendedCertificate,
    elGetter: $.ASN1Encoder<ExtendedCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificate) {
        _cached_encoder_for_ExtendedCertificate = function (
            value: ExtendedCertificate,
            elGetter: $.ASN1Encoder<ExtendedCertificate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExtendedCertificateInfo(
                            value.extendedCertificateInfo,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Signature(
                            value.signature,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtendedCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedCertificate */

/* eslint-enable */
