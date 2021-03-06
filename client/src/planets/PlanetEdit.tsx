import * as React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    FormTab,
    Pagination,
    ReferenceManyField,
    required,
    TabbedForm,
    TextField,
    TextInput,
    useRecordContext,
    useGetManyReference,
    useTranslate,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import { PlanetEditDetails } from './PlanetEditDetails';
import CountryReferenceField from '../countries/CountryReferenceField';
// import StarRatingField from '../reviews/StarRatingField';
import Poster from './Poster';
import { Planet } from '../types';
import { Container, CssBaseline, InputAdornment } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const ProductTitle = () => {
    const record = useRecordContext<Planet>();
    return record ? <span>Poster "{record.reference}"</span> : null;
};

const PlanetEdit = () => (
    <Container sx={{ maxWidth: { xl: 1280 } }}>
        <CssBaseline />
        <Edit title={<ProductTitle />}>
            <TabbedForm>
                <FormTab
                    label="resources.planets.tabs.image"
                    sx={{ maxWidth: '40em' }}
                >
                    <Poster />
                    <TextInput
                        sx={{ mt: 2 }}
                        source="image"
                        fullWidth
                        validate={required()}
                        label='Image'
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <InsertPhotoIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextInput
                        sx={{ m: 0 }}
                        source="thumbnail"
                        fullWidth
                        validate={required()}
                        label='Thumbnail'
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <InsertPhotoIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormTab>
                <FormTab
                    label="resources.planets.tabs.details"
                    path="details"
                    sx={{ maxWidth: '40em' }}
                >
                    <PlanetEditDetails />
                </FormTab>
                <FormTab
                    label="resources.planets.tabs.description"
                    path="description"
                    sx={{ maxWidth: '40em' }}
                >
                    <TextInput
                        source="description"
                        multiline
                        rows={3}
                        fullWidth
                        label='Description'
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DescriptionIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextInput
                        source="link"
                        fullWidth
                        label='Link'
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <InsertLinkIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormTab>
                {/* <ReviewsFormTab path="reviews">
                    <ReferenceManyField
                        reference="reviews"
                        target="planet_id"
                        pagination={<Pagination />}
                    >
                        <Datagrid
                            sx={{
                                width: '100%',
                                '& .column-comment': {
                                    maxWidth: '20em',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                },
                            }}
                        >
                            <DateField source="date" />
                            <CountryReferenceField />
                            <StarRatingField />
                            <TextField source="comment" />
                            <TextField source="status" />
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>
                </ReviewsFormTab> */}
            </TabbedForm>
        </Edit>
    </Container>
);

const req = [required()];

const ReviewsFormTab = (props: any) => {
    const record = useRecordContext();
    const { isLoading, total } = useGetManyReference(
        'reviews',
        {
            target: 'planet_id',
            id: record.id,
            pagination: { page: 1, perPage: 25 },
            sort: { field: 'id', order: 'DESC' },
        },
        {
            enabled: !!record,
        }
    );
    const translate = useTranslate();
    let label = translate('resources.planets.tabs.reviews');
    if (!isLoading) {
        label += ` (${total})`;
    }
    return <FormTab label={label} {...props} />;
};

export default PlanetEdit;
