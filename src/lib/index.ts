// place files you want to import through the `$lib` alias in this folder.

import type { AllianceInfo, FlattenedAlliance } from "./types";

export function createAlliance(name: string, color: string): AllianceInfo {
    return {
        name,
        color,
        score: 0,
        points: {
            rankingPoints: {
                coopertition: 0,
                auto: 0,
                coral: 0,
                barge: 0
            },
            reef: [
                { auto: 0, teleop: 0 },
                { auto: 0, teleop: 0 },
                { auto: 0, teleop: 0 },
                { auto: 0, teleop: 0 }
            ],
            algae: {
                processor: 0,
                net: 0
            },
            barge: [0,0,0],
            robotLeaveCount: 0
        }
    };
}

export function generateFilename() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}.reefscape.csv`;
}

export function alliancesToCSV(alliances: AllianceInfo[]): string {
    const flattenedAlliances = flattenAlliances(alliances);

    if (!flattenedAlliances.length) return '';

    const headers = Object.keys(flattenedAlliances[0]);

    const csvRows = flattenedAlliances.map(alliance => 
        headers.map(header => alliance[header as keyof FlattenedAlliance]).join(',')
    );

    return [headers.join(','), ...csvRows].join('\n');
}

export function csvToAlliances(csv: string): AllianceInfo[] {
    if (!csv.trim()) return [];

    const rows = csv.split('\n');
    const headers = rows[0].split(',');

    return rows.slice(1).map(row => {
        const values = row.split(',');

        const flattenedAlliance: Record<string, any> = {};
        headers.forEach((header, index) => {
            flattenedAlliance[header] = values[index];
        });

        // Map the flattened data back into the structure of AllianceInfo
        return {
            name: flattenedAlliance.name,
            color: flattenedAlliance.color,
            score: Number(flattenedAlliance.score),

            points: {
                rankingPoints: {
                    coopertition: Number(flattenedAlliance.rp_coopertition),
                    auto: Number(flattenedAlliance.rp_auto),
                    coral: Number(flattenedAlliance.rp_coral),
                    barge: Number(flattenedAlliance.rp_barge),
                },
                reef: [
                    { auto: Number(flattenedAlliance.trough_auto), teleop: Number(flattenedAlliance.trough_teleop) },
                    { auto: Number(flattenedAlliance.l2_auto), teleop: Number(flattenedAlliance.l2_teleop) },
                    { auto: Number(flattenedAlliance.l3_auto), teleop: Number(flattenedAlliance.l3_teleop) },
                    { auto: Number(flattenedAlliance.l4_auto), teleop: Number(flattenedAlliance.l4_teleop) },
                ],
                algae: {
                    processor: Number(flattenedAlliance.algae_processor),
                    net: Number(flattenedAlliance.algae_net),
                },
                barge: [
                    Number(flattenedAlliance.barge_robot_1),
                    Number(flattenedAlliance.barge_robot_2),
                    Number(flattenedAlliance.barge_robot_3),
                ],
                robotLeaveCount: Number(flattenedAlliance.robot_leave_count),
            },
        } as AllianceInfo;
    });
}



export function flattenAlliances(alliances: AllianceInfo[]) {
    let flattened: FlattenedAlliance[] = [];

    alliances.forEach(alliance => {
        flattened.push({
            name: alliance.name,
            color: alliance.color,
            score: alliance.score,

            rp_coopertition: alliance.points.rankingPoints.coopertition,
            rp_auto: alliance.points.rankingPoints.auto,
            rp_coral: alliance.points.rankingPoints.coral,
            rp_barge: alliance.points.rankingPoints.barge,

            trough_auto: alliance.points.reef[0].auto,
            l2_auto: alliance.points.reef[1].auto,
            l3_auto: alliance.points.reef[2].auto,
            l4_auto: alliance.points.reef[3].auto,

            trough_teleop: alliance.points.reef[0].teleop,
            l2_teleop: alliance.points.reef[1].teleop,
            l3_teleop: alliance.points.reef[2].teleop,
            l4_teleop: alliance.points.reef[3].teleop,

            algae_processor: alliance.points.algae.processor,
            algae_net: alliance.points.algae.net,

            barge_robot_1: alliance.points.barge[0],
            barge_robot_2: alliance.points.barge[1],
            barge_robot_3: alliance.points.barge[2],

            robot_leave_count: alliance.points.robotLeaveCount
        })
    });

    return flattened;
}