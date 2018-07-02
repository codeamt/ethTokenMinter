import ContractsStore from "./ContractsStore.js";
import GradientTokenStore from "./GradientTokenStore.js";
import ModalStore from "./ModalStore.js";

const modalStore = new ModalStore();


const contractsStore = new ContractsStore();
contractsStore.setup();

const gradientTokenStore = new GradientTokenStore(contractsStore);

export default {
  modalStore,
  contractsStore,
  gradientTokenStore
};