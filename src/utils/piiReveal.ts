const PII_BYTES = {
  name: [30, 55, 51, 46, 40, 51, 122, 22, 59, 42, 46, 63, 44],
  street: [21, 56, 63, 40, 63, 122, 28, 63, 54, 62, 41, 46, 40, 116, 122, 108],
  city: [98, 105, 105, 99, 111, 122, 28, 40, 63, 51, 54, 59, 41, 41, 51, 52, 61],
  email: [62, 98, 105, 105, 99, 111, 26, 61, 55, 59, 51, 54, 116, 57, 53, 55],
  phone: [113, 110, 99, 122, 107, 111, 108, 109, 98, 122, 99, 108, 98, 107, 105, 105],
} as const;

export type PiiKey = keyof typeof PII_BYTES;

const SKELETON_CLASSES = [
  'bg-slate-200/70',
  'text-transparent',
  'animate-pulse',
  'select-none',
  'rounded',
];

const decodeBytes = (bytes: readonly number[]): string =>
  new TextDecoder().decode(new Uint8Array(bytes.map((b) => b ^ 0x5a)));

/**
 * Binds open/close handlers for a modal and reveals XOR-encoded personal data
 * as plain selectable text after a 1-second delay.
 */
export function bindPiiModal(
  modalId: string,
  openSelector: string,
  closeSelector: string,
  panelSelector: string,
  extraEvent?: string
): void {
  const modal = document.getElementById(modalId);
  const panel = modal?.querySelector<HTMLElement>(panelSelector);
  const closeBtn = modal?.querySelector<HTMLButtonElement>(closeSelector);
  const triggers = document.querySelectorAll<HTMLButtonElement>(openSelector);
  let timerId: number | undefined;

  const resetSlots = () => {
    if (timerId !== undefined) {
      window.clearTimeout(timerId);
      timerId = undefined;
    }
    modal?.querySelectorAll<HTMLElement>('[data-pii]').forEach((el) => {
      el.textContent = '••••••••••';
      el.classList.add(...SKELETON_CLASSES);
      el.classList.remove('select-text');
      el.setAttribute('aria-busy', 'true');
    });
  };

  const revealSlots = () => {
    timerId = window.setTimeout(() => {
      modal?.querySelectorAll<HTMLElement>('[data-pii]').forEach((el) => {
        const key = el.dataset.pii as PiiKey | undefined;
        if (!key || !(key in PII_BYTES)) return;
        el.textContent = decodeBytes(PII_BYTES[key]);
        el.classList.remove(...SKELETON_CLASSES);
        el.classList.add('select-text');
        el.removeAttribute('aria-busy');
      });
      timerId = undefined;
    }, 1000);
  };

  const openModal = () => {
    if (!modal) return;
    resetSlots();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
    revealSlots();
  };

  const closeModal = () => {
    if (!modal) return;
    resetSlots();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  triggers.forEach((btn) => btn.addEventListener('click', openModal));
  if (extraEvent) {
    window.addEventListener(extraEvent, openModal);
  }
  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  panel?.addEventListener('click', (event) => event.stopPropagation());
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
