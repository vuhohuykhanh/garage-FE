export enum CartType {
  ACCESSORY = 'accessory',
  SERVICE = 'service',
}

export enum CartDetail {
	PENDING = 'Chờ duyệt',
	APPROVED = 'Đã duyệt',
	WAIT_FOR_PROGRESSING = 'Chờ xử lý',
	PROGRESSING = 'Đang xử lý',
	COMPLETE = 'Xử lý hoàn tất'
}
