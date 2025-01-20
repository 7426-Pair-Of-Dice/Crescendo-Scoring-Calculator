export interface RankingPoints {
    coopertition: number;
    auto: number;
    coral: number;
    barge: number
}


export interface AllianceInfo {
    name: string;
    color: string;
    score: number;
    points: ReefscapePoints;
}

export interface ReefscapePoints {
    rankingPoints: RankingPoints;
    reef: AutoTeleopPoints[];
    barge: number[];
    algae: AlgaePoints;
    robotLeaveCount: number;
}

export interface AlgaePoints {
    processor: number;
    net: number;
}

export interface AutoTeleopPoints {
    auto: number;
    teleop: number;
}

export interface FlattenedAlliance {
    name: string;
    color: string;
    score: number;

    rp_coopertition: number;
    rp_auto: number;
    rp_coral: number;
    rp_barge: number;

    trough_auto: number;
    l2_auto: number;
    l3_auto: number;
    l4_auto: number;

    trough_teleop: number;
    l2_teleop: number;
    l3_teleop: number;
    l4_teleop: number;

    algae_processor: number;
    algae_net: number;

    barge_robot_1: number;
    barge_robot_2: number;
    barge_robot_3: number;

    robot_leave_count: number;
}
