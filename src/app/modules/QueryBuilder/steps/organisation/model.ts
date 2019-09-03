import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';
import { OrganisationModel } from 'app/state/models';
import { FragmentBaseModel } from 'app/modules/QueryBuilder/fragments/index';

type SelectModel = {
  label?: string;
  helperText?: string;
  helperTextLink?: string;
  helperTextUrl?: string;
  placeholder?: string;
  className: string;
  name: string;
  value?: any;
  options?: any;
  onChange?: any;
  getOptionLabel?: getOptionLabel;
  getOptionValue?: getOptionValue;
};

interface FragmentModel extends FragmentBaseModel {
  organisationTypes: SelectModel;
  organisationSector: SelectModel;
  organisations: SelectModel;
  secondaryPublisher: SelectModel;
  sectorCategory: SelectModel;
  recipientCountry: SelectModel;
  recipientRegion: SelectModel;
  activityPeriode: SelectModel;
}

export const fragmentConfig: FragmentModel = {
  name: 'Who',
  description:
    'First you need to find the organisation or organisations you want data about. Depending if you want one specific organsation or a wieder net. You can use the filters to narrow the data you want.',
  organisations: {
    label: 'Reporting Organisation',
    className: 'organisationNameSelect',
    name: 'organisations',
    helperText: 'E.g. AT-12 = Ministry of Interior.',
    helperTextLink: 'See list',
    helperTextUrl: 'http://reference.iatistandard.org/203/codelists/Sector/',
    placeholder: 'All (24)',
    getOptionLabel: (option: OrganisationModel) =>
      `${option.organisation_identifier}: ${option.name.narratives[0].text}`,
    getOptionValue: (option: OrganisationModel) =>
      option.organisation_identifier,
  },
  organisationTypes: {
    label: 'Type of Organisation',
    helperTextLink: 'Code List',
    helperTextUrl:
      'http://reference.iatistandard.org/203/codelists/OrganisationType/',
    placeholder: 'All (0)',
    className: 'organisationTypeSelect',
    name: 'organisationTypes',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  secondaryPublisher: {
    label: 'Secondary Publisher?',
    placeholder: 'Choose',
    className: 'secondaryPublisherSelect',
    name: 'secondaryPublisher',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  organisationSector: {
    label: 'Sector',
    helperTextLink: 'DAC 5 digit',
    helperTextUrl: 'http://reference.iatistandard.org/203/codelists/Sector/',
    placeholder: 'All (0)',
    className: 'organisationSectorSelect',
    name: 'organisationSector',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  sectorCategory: {
    label: 'Sector Category',
    helperTextLink: 'DAC 3 digit',
    helperTextUrl:
      'http://reference.iatistandard.org/203/codelists/SectorCategory/',
    placeholder: 'All (0)',
    className: 'sectorCategorySelect',
    name: 'sectorCategory',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  recipientCountry: {
    label: 'Recipient Country',
    placeholder: 'All (0)',
    className: 'recipientCountrySelect',
    name: 'recipientCountry',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  recipientRegion: {
    label: 'Recipient Region',
    placeholder: 'All (0)',
    className: 'recipientRegionSelect',
    name: 'recipientRegion',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  activityPeriode: {
    label: 'Must have activity periode',
    placeholder: 'No',
    className: 'activityPeriode',
    name: 'activityPeriode',
    options: ['Yes', 'No'],
    getOptionLabel: option => option,
    getOptionValue: option => option,
  },
};
