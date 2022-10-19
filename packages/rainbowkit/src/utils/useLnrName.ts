import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import linagee_abi from './linagee_abi.json';
import { getProvider } from '../providers';

export async function usehLnrName({
  address,
  chainId,
}: FetchLnrNameArgs): Promise<FetchLnrNameResult> {
  
  const wrapperAddress = "0x2Cc8342d7c8BFf5A213eb2cdE39DE9a59b3461A7";
  
    const wrapperConfig = {
        addressOrName: wrapperAddress,
        contractInterface: linagee_abi,
    };
  
    const { refetch } = useContractRead({
        ...wrapperConfig,
        functionName: 'tokenOfOwnerByIndex',
        args:[address, 0],
    });
  
    const fetchlnr = async ()=>{
      await refetch();

    };
  }
  

  return fetchlnr
}
