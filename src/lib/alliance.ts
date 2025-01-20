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
