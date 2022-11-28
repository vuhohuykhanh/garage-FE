import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
import formatMoneyWithDot from '../../constants/until';
import styles from '../style.module.css'

const formatMoney = (price: any, sale: any) => {
    return formatMoneyWithDot(price - (price * sale) / 100);
};

const ProductItemService = (service: any) => {
	console.log('service', service);
    return (
        <>
            <Card
                sx={{ backgroundColor: '#FFFFFF', height: 430 }}
                className="productCard"
                key={service.serviceId}
            >
                <CardMedia
                    component="img"
                    height="200"
                     image={require('../../assets/images/293399859_6014255531934980_2866254695672486007_n.jpg')}
                    // image={url(service?.image)}
                    //src={service?.image}
                    alt="green iguana"
                />
                <CardHeader
                    title={
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: '18px',
                                fontWeight: '700',
                                color: '#000000',
                                height: 70,
                            }}
                            mt={2}
                        >
                            {service.name}
                        </Typography>
                    }
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography
                            variant="body2"
                            className={
                                service?.saleDescriptions?.[0]?.salePercent
                                    ? 'typical_price'
                                    : 'sale_price'
                            }
                        >
                            {formatMoneyWithDot(service.price)}
                        </Typography>
                        <Typography variant="body2" className="sale_price">
                            {service?.saleDescriptions?.[0]?.salePercent
                                ? formatMoney(
                                      service.price,
                                      service?.saleDescriptions?.[0]?.salePercent
                                  )
                                : ''}
                        </Typography>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                        {service?.saleDescriptions?.[0]?.salePercent ? (
                            <img
                                src={require('../../assets/images/iconSale.png')}
                                alt="sale_img"
                            />
                        ) : (
                            ''
                        )}
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '12px',
                            }}
                        >
                            {service?.saleDescriptions?.[0]?.salePercent}
                            {service?.saleDescriptions?.[0]?.salePercent
                                ? '%'
                                : ''}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default ProductItemService;
