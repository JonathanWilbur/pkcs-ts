/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { countryOfCitizenship } from "../PKCS-9/countryOfCitizenship.oa";
import { countryOfResidence } from "../PKCS-9/countryOfResidence.oa";
import { dateOfBirth } from "../PKCS-9/dateOfBirth.oa";
import { emailAddress } from "../PKCS-9/emailAddress.oa";
import { gender } from "../PKCS-9/gender.oa";
import { placeOfBirth } from "../PKCS-9/placeOfBirth.oa";
import { pseudonym } from "../PKCS-9/pseudonym.oa";
import { unstructuredAddress } from "../PKCS-9/unstructuredAddress.oa";
import { unstructuredName } from "../PKCS-9/unstructuredName.oa";
import { serialNumber } from "x500-ts/dist/node/modules/SelectedAttributeTypes/serialNumber.oa";

/* START_OF_SYMBOL_DEFINITION NaturalPersonAttributeSet */
/**
 * @summary NaturalPersonAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NaturalPersonAttributeSet ATTRIBUTE ::= {
 *         emailAddress |
 *         unstructuredName |
 *         unstructuredAddress |
 *         dateOfBirth |
 *         placeOfBirth |
 *         gender |
 *         countryOfCitizenship |
 *         countryOfResidence |
 *         pseudonym |
 *         serialNumber,
 *         ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const NaturalPersonAttributeSet: ATTRIBUTE[] = [
    emailAddress,
    unstructuredName,
    unstructuredAddress,
    dateOfBirth,
    placeOfBirth,
    gender,
    countryOfCitizenship,
    countryOfResidence,
    pseudonym,
    serialNumber,
];
/* END_OF_SYMBOL_DEFINITION NaturalPersonAttributeSet */

/* eslint-enable */
