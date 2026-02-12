import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class SenatorsService {
    async getSenatorsByState(state: string) {
        const apiKey = process.env.CONGRESS_API_KEY;

        const url = `https://api.congress.gov/v3/member/${state}`;

        const response = await axios.get(url, {
                params: {
                    format: 'json',
                    limit: 60,
                    currentMember: 'true',
                    api_key: apiKey,
                },
            },
        );

        return response.data.members;
    }
}