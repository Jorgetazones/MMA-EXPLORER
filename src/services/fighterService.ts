import { octagonApi } from './octagonApi';

export const fighterService = {
  getRankings: octagonApi.getRankings,
  getFighters: octagonApi.getFighters,
  getFighter: octagonApi.getFighter,
  getDivision: octagonApi.getDivision,
};
