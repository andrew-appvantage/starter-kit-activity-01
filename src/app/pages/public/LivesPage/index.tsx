import { Table, Tag } from 'antd';
import { useListLivesQuery } from '../../../api';
import LoadingElement from '../../../components/LoadingElement';
import BasicLayout from '../../../layouts/BasicLayout';

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
        render: date => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Hobbies',
        dataIndex: 'hobbies',
        key: 'hobbies',
        render: tags => (
            <>
                {tags.map((tag, i) => {
                    const color = i % 2 === 0 ? 'geekblue' : 'green';

                    return (
                        <Tag key={tag} color={color}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const LivesPage = () => {
    const { data, loading } = useListLivesQuery();

    if (loading) {
        return <LoadingElement />;
    }

    return (
        <BasicLayout>
            <Table columns={columns} dataSource={data?.listLives} rowKey="fullName" />
        </BasicLayout>
    );
};

export default LivesPage;
