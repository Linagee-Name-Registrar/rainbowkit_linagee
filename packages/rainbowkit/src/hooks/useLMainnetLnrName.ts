import { useMainnet } from './useMainnet';
import { useLnrName } from '../utils/useLnrName';

export function useMainnetLnrName(address: string | undefined) {
  const { chainId, enabled } = useMainnet();

  const { data: lnrName } = useLnrName({
    address,
    chainId,
    enabled,
  });

  return lnrName;
}
