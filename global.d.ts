import * as bitburner from "./NetscriptDefinitions";

export { }

declare global {
    const React: typeof import('react')
    const ReactDOM: typeof import('react-dom')

    interface HP extends bitburner.HP {}
    interface Skills extends bitburner.Skills {}
    type ScriptArg = bitburner.ScriptArg;
    type FilenameOrPID = bitburner.FilenameOrPID;
    interface Person extends bitburner.Person {}
    interface Player extends bitburner.Player {}
    interface SleevePerson extends bitburner.SleevePerson {}
    interface ResetInfo extends bitburner.ResetInfo {}
    interface MoneySource extends bitburner.MoneySource {}
    interface MoneySources extends bitburner.MoneySources {}
    interface Multipliers extends bitburner.Multipliers {}
    interface TailProperties extends bitburner.TailProperties {}
    type ReactNode = bitburner.ReactNode;
    interface ReactElement extends bitburner.ReactElement {}
    interface RunningScript extends bitburner.RunningScript {}
    interface RunOptions extends bitburner.RunOptions {}
    interface SpawnOptions extends bitburner.SpawnOptions {}
    interface RecentScript extends bitburner.RecentScript {}
    interface CrimeStats extends bitburner.CrimeStats {}
    interface BasicHGWOptions extends bitburner.BasicHGWOptions {}
    interface AugmentPair extends bitburner.AugmentPair {}
    type PositionType = bitburner.PositionType;
    type OrderType = bitburner.OrderType;
    interface StockOrderObject extends bitburner.StockOrderObject {}
    interface StockOrder extends bitburner.StockOrder {}
    interface StockMarketConstants extends bitburner.StockMarketConstants {}
    interface ProcessInfo extends bitburner.ProcessInfo {}
    interface HackingMultipliers extends bitburner.HackingMultipliers {}
    interface HacknetMultipliers extends bitburner.HacknetMultipliers {}
    interface HacknetNodeConstants extends bitburner.HacknetNodeConstants {}
    interface HacknetServerConstants extends bitburner.HacknetServerConstants {}
    interface Server extends bitburner.Server {}
    interface BitNodeMultipliers extends bitburner.BitNodeMultipliers {}
    interface NodeStats extends bitburner.NodeStats {}
    interface SourceFileLvl extends bitburner.SourceFileLvl {}
    interface BladeburnerCurAction extends bitburner.BladeburnerCurAction {}
    interface GangGenInfo extends bitburner.GangGenInfo {}
    interface GangOtherInfoObject extends bitburner.GangOtherInfoObject {}
    interface GangTaskStats extends bitburner.GangTaskStats {}
    interface EquipmentStats extends bitburner.EquipmentStats {}
    interface GangTerritory extends bitburner.GangTerritory {}
    interface GangMemberExpGain extends bitburner.GangMemberExpGain {}
    interface GangMemberInfo extends bitburner.GangMemberInfo {}
    interface GangMemberInstall extends bitburner.GangMemberInstall {}
    interface GangMemberAscension extends bitburner.GangMemberAscension {}
    type SleeveBladeburnerTask = bitburner.SleeveBladeburnerTask;
    type SleeveClassTask = bitburner.SleeveClassTask;
    type SleeveCompanyTask = bitburner.SleeveCompanyTask;
    type SleeveCrimeTask = bitburner.SleeveCrimeTask;
    type SleeveFactionTask = bitburner.SleeveFactionTask;
    type SleeveInfiltrateTask = bitburner.SleeveInfiltrateTask;
    type SleeveRecoveryTask = bitburner.SleeveRecoveryTask;
    type SleeveSupportTask = bitburner.SleeveSupportTask;
    type SleeveSynchroTask = bitburner.SleeveSynchroTask;
    type SleeveTask = bitburner.SleeveTask;
    interface NetscriptPort extends bitburner.NetscriptPort {}
    interface TIX extends bitburner.TIX {}
    interface BaseTask extends bitburner.BaseTask {}
    interface StudyTask extends bitburner.StudyTask {}
    interface CompanyWorkTask extends bitburner.CompanyWorkTask {}
    interface CreateProgramWorkTask extends bitburner.CreateProgramWorkTask {}
    interface CrimeTask extends bitburner.CrimeTask {}
    interface FactionWorkTask extends bitburner.FactionWorkTask {}
    interface GraftingTask extends bitburner.GraftingTask {}
    type Task = bitburner.Task;
    interface BitNodeOptions extends bitburner.BitNodeOptions {}
    interface BitNodeBooleanOptions extends bitburner.BitNodeBooleanOptions {}
    interface Singularity extends bitburner.Singularity {}
    interface CompanyPositionInfo extends bitburner.CompanyPositionInfo {}
    interface Hacknet extends bitburner.Hacknet {}
    type BladeburnerActionType = bitburner.BladeburnerActionType;
    type BladeburnerGeneralActionName = bitburner.BladeburnerGeneralActionName;
    type BladeburnerContractName = bitburner.BladeburnerContractName;
    type BladeburnerOperationName = bitburner.BladeburnerOperationName;
    type BladeburnerBlackOpName = bitburner.BladeburnerBlackOpName;
    type BladeburnerSkillName = bitburner.BladeburnerSkillName;
    type BladeburnerActionName = bitburner.BladeburnerActionName;
    type SpecialBladeburnerActionTypeForSleeve = bitburner.SpecialBladeburnerActionTypeForSleeve;
    type BladeburnerActionTypeForSleeve = bitburner.BladeburnerActionTypeForSleeve;
    interface Bladeburner extends bitburner.Bladeburner {}
    interface CodingContract extends bitburner.CodingContract {}
    interface Gang extends bitburner.Gang {}
    type GoOpponent = bitburner.GoOpponent;
    type SimpleOpponentStats = bitburner.SimpleOpponentStats;
    interface GoAnalysis extends bitburner.GoAnalysis {}
    interface GoCheat extends bitburner.GoCheat {}
    interface Go extends bitburner.Go {}
    interface Sleeve extends bitburner.Sleeve {}
    interface Grafting extends bitburner.Grafting {}
    interface SkillsFormulas extends bitburner.SkillsFormulas {}
    interface WorkStats extends bitburner.WorkStats {}
    interface WorkFormulas extends bitburner.WorkFormulas {}
    interface ReputationFormulas extends bitburner.ReputationFormulas {}
    interface HackingFormulas extends bitburner.HackingFormulas {}
    interface HacknetNodesFormulas extends bitburner.HacknetNodesFormulas {}
    interface HacknetServersFormulas extends bitburner.HacknetServersFormulas {}
    interface GangFormulas extends bitburner.GangFormulas {}
    interface BladeburnerFormulas extends bitburner.BladeburnerFormulas {}
    interface Formulas extends bitburner.Formulas {}
    interface Fragment extends bitburner.Fragment {}
    interface ActiveFragment extends bitburner.ActiveFragment {}
    interface Stanek extends bitburner.Stanek {}
    interface InfiltrationReward extends bitburner.InfiltrationReward {}
    interface ILocation extends bitburner.ILocation {}
    interface InfiltrationLocation extends bitburner.InfiltrationLocation {}
    interface Infiltration extends bitburner.Infiltration {}
    interface UserInterface extends bitburner.UserInterface {}
    interface NS extends bitburner.NS {}
    type ToastVariant = bitburner.ToastVariant;
    type CrimeType = bitburner.CrimeType;
    type FactionWorkType = bitburner.FactionWorkType;
    type UniversityClassType = bitburner.UniversityClassType;
    type GymType = bitburner.GymType;
    type JobName = bitburner.JobName;
    type JobField = bitburner.JobField;
    type CorpEmployeePosition = bitburner.CorpEmployeePosition;
    type CorpIndustryName = bitburner.CorpIndustryName;
    type CorpSmartSupplyOption = bitburner.CorpSmartSupplyOption;
    type CityName = bitburner.CityName;
    type LocationName = bitburner.LocationName;
    type UniversityLocationName = bitburner.UniversityLocationName;
    type GymLocationName = bitburner.GymLocationName;
    type CompanyName = bitburner.CompanyName;
    type FactionName = bitburner.FactionName;
    type CodingContractName = bitburner.CodingContractName;
    type CodingContractSignatures = bitburner.CodingContractSignatures;
    type CodingContractObject = bitburner.CodingContractObject;
    type NSEnums = bitburner.NSEnums;
    interface OfficeAPI extends bitburner.OfficeAPI {}
    interface WarehouseAPI extends bitburner.WarehouseAPI {}
    type CreatingCorporationCheckResult = bitburner.CreatingCorporationCheckResult;
    interface Corporation extends bitburner.Corporation {}
    interface CorpProductData extends bitburner.CorpProductData {}
    interface CorpIndustryData extends bitburner.CorpIndustryData {}
    interface CorporationInfo extends bitburner.CorporationInfo {}
    interface CorpConstants extends bitburner.CorpConstants {}
    type CorpStateName = bitburner.CorpStateName;
    type CorpMaterialName = bitburner.CorpMaterialName;
    type CorpUnlockName = bitburner.CorpUnlockName;
    type CorpUpgradeName = bitburner.CorpUpgradeName;
    type CorpResearchName = bitburner.CorpResearchName;
    interface CorpMaterialConstantData extends bitburner.CorpMaterialConstantData {}
    interface IndustryData extends bitburner.IndustryData {}
    interface Product extends bitburner.Product {}
    interface Material extends bitburner.Material {}
    interface Export extends bitburner.Export {}
    interface Warehouse extends bitburner.Warehouse {}
    interface Office extends bitburner.Office {}
    interface Division extends bitburner.Division {}
    interface InvestmentOffer extends bitburner.InvestmentOffer {}
    interface UserInterfaceTheme extends bitburner.UserInterfaceTheme {}
    interface IStyleSettings extends bitburner.IStyleSettings {}
    interface GameInfo extends bitburner.GameInfo {}
    interface AutocompleteData extends bitburner.AutocompleteData {}
    interface MoneyRequirement extends bitburner.MoneyRequirement {}
    interface SkillRequirement extends bitburner.SkillRequirement {}
    interface KarmaRequirement extends bitburner.KarmaRequirement {}
    interface PeopleKilledRequirement extends bitburner.PeopleKilledRequirement {}
    interface FileRequirement extends bitburner.FileRequirement {}
    interface NumAugmentationsRequirement extends bitburner.NumAugmentationsRequirement {}
    interface EmployedByRequirement extends bitburner.EmployedByRequirement {}
    interface CompanyReputationRequirement extends bitburner.CompanyReputationRequirement {}
    interface JobTitleRequirement extends bitburner.JobTitleRequirement {}
    interface CityRequirement extends bitburner.CityRequirement {}
    interface LocationRequirement extends bitburner.LocationRequirement {}
    interface BackdoorRequirement extends bitburner.BackdoorRequirement {}
    interface HacknetRAMRequirement extends bitburner.HacknetRAMRequirement {}
    interface HacknetCoresRequirement extends bitburner.HacknetCoresRequirement {}
    interface HacknetLevelsRequirement extends bitburner.HacknetLevelsRequirement {}
    interface BitNodeRequirement extends bitburner.BitNodeRequirement {}
    interface SourceFileRequirement extends bitburner.SourceFileRequirement {}
    interface BladeburnerRankRequirement extends bitburner.BladeburnerRankRequirement {}
    interface NumInfiltrationsRequirement extends bitburner.NumInfiltrationsRequirement {}
    interface NotRequirement extends bitburner.NotRequirement {}
    interface SomeRequirement extends bitburner.SomeRequirement {}
    interface EveryRequirement extends bitburner.EveryRequirement {}
    type PlayerRequirement = bitburner.PlayerRequirement;

    type AutocompleteConfig = [string, string | number | boolean | string[]][];

    interface AutocompleteData {
        servers: string[],
        txts: string[],
        scripts: string[],
        flags: (config: AutocompleteConfig) => any
    }
}
