// place files you want to import through the `$lib` alias in this folder.

import { flattenAlliances } from "./alliance";
import type { AllianceInfo, FlattenedAlliance } from "./types";

export function generateFilename(extension: string) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}${extension}`;
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

export function getRandomMember() {
    let member: string[] = [
        "Otto",
        "Ohlin",
        "Anthony",
        "Aidan",
        "Aspen",
        "West",
        "Goblo",
        "Cohen",
        "Eli",
        "Brian",
        "Jo",
        "Annabelle",
        "Alex",
        "Vieira",
        "Miller",
        "Jackie",
        "Jonathan",
        "Stephen",
        "Zach",
        "Armando",
        "Marco",
        "Rose",
        "Skylar",
        "John",
        "Bechtler",
        "Myers",
        "Ollie",
        "Drake",
        "Jory",
        "Ella",
        "Cole"
    ]
    return member[Math.floor(Math.random() * member.length)];
}