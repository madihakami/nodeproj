import ICommandConfig from "./ICommandConfig";
import ICommand from "./ICommand";

export default interface ICommandFactory{
   makeCommand : (config : ICommandConfig) => ICommand
}