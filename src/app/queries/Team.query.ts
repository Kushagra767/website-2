import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { PreviewImagePathOnly } from '../types/PreviewImage';

export interface TeamGQLEntry {
	_id: string;
	fullName: string;
	image: PreviewImagePathOnly;
	lead: boolean;
	founder: boolean;
	description: string;
	mainRole: string;
	sideRole: string;
}

export interface TeamGQLResponse {
	teamCollection: TeamGQLEntry[];
}

@Injectable({
	providedIn: 'root'
})
export class TeamGQL extends Query<TeamGQLResponse> {
	document = gql`
		query GetTeam {
			teamCollection(sort: { founder: true, lead: true, fullName: "asc" }) {
				_id
				fullName
				image {
					path
				}
				description
				lead
				founder
				mainRole
				sideRole
			}
		}
		`;
}
