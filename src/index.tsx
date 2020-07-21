import { NativeModules } from 'react-native';

type IosAppClipsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { IosAppClips } = NativeModules;

export default IosAppClips as IosAppClipsType;
